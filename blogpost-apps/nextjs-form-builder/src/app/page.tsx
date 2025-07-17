'use client'

import { useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import courseEvaluationForm from "../formSamples/courseEvaluationForm";
import healthAndWellnessAssessment from "../formSamples/healthAndWellnessAssessment";
import marketResearchForm from "../formSamples/marketResearchForm";
import volunteerSignUpForm from "../formSamples/volunteerSignUpForm";
import websiteUsabilityForm from "../formSamples/websiteUsabilityForm";

// Dynamic import to prevent SSR issues
const FormBuilderComponent = dynamic(() => import('@/components/FormBuilder'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading Form Builder...</div>
});

const STORAGE_KEY = 'surveyjs-form-definitions';

export default function Home() {
  const [surveyJson, setSurveyJson] = useState<any>(null);
  const [savedSurveys, setSavedSurveys] = useState<any[]>([]);
  const [currentSurveyName, setCurrentSurveyName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadInitialSurveys() {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedList = saved ? JSON.parse(saved) : [];

      const preloaded = [courseEvaluationForm, healthAndWellnessAssessment, marketResearchForm, volunteerSignUpForm, websiteUsabilityForm];
      const merged = [...preloaded, ...savedList.filter(s => !preloaded.some(p => p.id === s.id))];

      setSavedSurveys(merged);
      setIsLoading(false);
    }

    loadInitialSurveys();
  }, []);

  const handleSurveyChange = useCallback((json: any) => {
    setSurveyJson(json);
  }, []);

  const saveSurvey = useCallback(() => {
    if (!surveyJson || !currentSurveyName.trim()) {
      alert('Please enter a survey name and create a survey first.');
      return;
    }
    const newSurvey = {
      id: Date.now(),
      name: currentSurveyName,
      json: surveyJson,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const updatedSurveys = [...savedSurveys, newSurvey];
    setSavedSurveys(updatedSurveys);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSurveys));
    setCurrentSurveyName('');
    alert('Survey saved successfully!');
  }, [surveyJson, currentSurveyName, savedSurveys]);

  const loadSurvey = useCallback((survey: any) => {
    setSurveyJson(survey.json);
    setCurrentSurveyName(survey.name);
  }, []);

  const deleteSurvey = useCallback((surveyId: number) => {
    if (confirm('Are you sure you want to delete this survey?')) {
      const updatedSurveys = savedSurveys.filter(s => s.id !== surveyId);
      setSavedSurveys(updatedSurveys);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSurveys));
    }
  }, [savedSurveys]);

  const clearAllSurveys = useCallback(() => {
    if (confirm('Are you sure you want to clear all saved surveys?')) {
      setSavedSurveys([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
            <h1 className="text-2xl font-bold text-gray-900">SurveyJS Form Builder</h1>
            <div className="flex items-center gap-x-6">
              <input
                type="text"
                placeholder="Enter survey name..."
                value={currentSurveyName}
                onChange={(e) => setCurrentSurveyName(e.target.value)}
                className="px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <button
                onClick={saveSurvey}
                className="px-10 py-5 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                Save Survey
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-6rem)]">
        {/* Sidebar */}
        <aside className="w-80 bg-white shadow-sm border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-12 px-2">
              <h2 className="text-lg font-semibold text-gray-900">Saved Surveys</h2>
              {savedSurveys.length > 0 && (
                <button
                  onClick={clearAllSurveys}
                  className="text-sm text-red-600 hover:text-red-800 transition"
                >
                  Clear All
                </button>
              )}
            </div>

            {savedSurveys.length === 0 ? (
              <p className="text-gray-500 text-sm">No saved surveys yet.</p>
            ) : (
              <div className="space-y-6">
                {savedSurveys.map((survey) => (
                  <div
                    key={survey.id}
                    className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex justify-between items-start gap-6">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-2">{survey.name}</h3>
                        <p className="text-sm text-gray-500">
                          Created: {new Date(survey.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-4 ml-2">
                        <button
                          onClick={() => loadSurvey(survey)}
                          className="text-blue-600 hover:text-blue-800 text-sm transition"
                        >
                          Load
                        </button>
                        <button
                          onClick={() => deleteSurvey(survey.id)}
                          className="text-red-600 hover:text-red-800 text-sm transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <FormBuilderComponent
            onSaveSurvey={handleSurveyChange}
            json={surveyJson}
          />
        </main>
      </div>
    </div>
  );
}
