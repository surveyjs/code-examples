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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [surveyJson, setSurveyJson] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [savedSurveys, setSavedSurveys] = useState<any[]>([]);
  const [currentSurveyName, setCurrentSurveyName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadInitialSurveys() {
      const saved = localStorage.getItem(STORAGE_KEY);
      const savedList = saved ? JSON.parse(saved) : [];

      const preloaded = [courseEvaluationForm, healthAndWellnessAssessment, marketResearchForm, volunteerSignUpForm, websiteUsabilityForm];
      const merged = [
        ...preloaded,
        ...savedList.filter((s: { id: string }) => !preloaded.some(p => p.id === s.id))
      ];


      setSavedSurveys(merged);
      setIsLoading(false);
    }

    loadInitialSurveys();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <div className="flex h-[calc(100vh-6rem)]">
        <aside className="hidden lg:block xl:w-96 bg-white shadow-sm border-r border-gray-200 overflow-y-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-800 tracking-wide uppercase text-[17px]">
              Saved Surveys
            </h2>
            {savedSurveys.length > 0 && (
              <button
                onClick={clearAllSurveys}
                className="cursor-pointer text-red-600 hover:text-red-800 transition text-[17px]"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <input
              type="text"
              placeholder="Enter survey name"
              value={currentSurveyName}
              onChange={(e) => setCurrentSurveyName(e.target.value)}
              className="px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <button
              onClick={saveSurvey}
              className="cursor-pointer py-3 px-2 bg-blue-600 text-white text-base font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              Save Survey
            </button>
          </div>

          {savedSurveys.length === 0 ? (
            <p className="text-gray-500">No saved surveys yet.</p>
          ) : (
            <div>
              {savedSurveys.map((survey) => (
                <div key={survey.id} className="mb-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-8">
                      <h3 className="font-medium text-gray-900 mb-1 text-base">
                        {survey.name}
                      </h3>
                      <p className="text-gray-500">
                        Created: {new Date(survey.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-3 min-w-[70px]">
                      <button
                        onClick={() => loadSurvey(survey)}
                        className="cursor-pointer text-blue-600 hover:text-blue-800 transition py-1"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => deleteSurvey(survey.id)}
                        className="cursor-pointer text-red-600 hover:text-red-800 transition py-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>

        <main className="flex-1 overflow-y-auto">
          <FormBuilderComponent
            onSaveSurvey={handleSurveyChange}
            json={surveyJson}
          />
        </main>
      </div>
    </div>
  );
}