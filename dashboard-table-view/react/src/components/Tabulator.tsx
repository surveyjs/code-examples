'use client'

import { useState, useEffect } from 'react';
import 'tabulator-tables/dist/css/tabulator.css';
import 'survey-analytics/survey.analytics.tabulator.css';
import { Model } from 'survey-core';
import { Tabulator } from 'survey-analytics/survey.analytics.tabulator';

import jsPDF from "jspdf";
import { applyPlugin } from "jspdf-autotable";
applyPlugin(jsPDF);
import * as XLSX from "xlsx";

const surveyJson = {
  elements: [{
    name: "satisfaction-score",
    title: "How would you describe your experience with our product?",
    type: "radiogroup",
    choices: [
      { value: 5, text: "Fully satisfying" },
      { value: 4, text: "Generally satisfying" },
      { value: 3, text: "Neutral" },
      { value: 2, text: "Rather unsatisfying" },
      { value: 1, text: "Not satisfying at all" }
    ],
    isRequired: true
  }, {
    name: "nps-score",
    title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
    type: "rating",
    rateMin: 0,
    rateMax: 10,
  }],
  completedHtml: "Thank you for your feedback!",
};

function randomIntFromInterval(min: number, max: number): number  {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface INpsDataObject {
  "satisfaction-score": number;
  "nps-score": number;
}

function generateData(): Array<INpsDataObject> {
  const data: Array<INpsDataObject> = [];
  for (let index = 0; index < 100; index++) {
    const satisfactionScore = randomIntFromInterval(1, 5);
    const npsScore = satisfactionScore > 3 ? randomIntFromInterval(7, 10) : randomIntFromInterval(1, 6);
    data.push({
      "satisfaction-score": satisfactionScore,
      "nps-score": npsScore
    });
  }
  return data;
}

export default function TableViewComponent() {
  const [survey, setSurvey] = useState<Model>();
  const [surveyDataTable, setSurveyDataTable] = useState<Tabulator>();
  const [surveyResults, setSurveyResults] = useState<Array<INpsDataObject>>(generateData());
  if (!survey) {
    const survey = new Model(surveyJson);
    setSurvey(survey);
  }
  if (!surveyResults) {
    setSurveyResults(generateData());
  }

  if (!surveyDataTable && !!survey) {
    const surveyDataTable = new Tabulator(
      survey,
      surveyResults,
      { jspdf: jsPDF, xlsx: XLSX }
    );
    setSurveyDataTable(surveyDataTable);
  }

  useEffect(() => {
    surveyDataTable?.render("surveyDataTable");
    return () => {
      document.getElementById("surveyDataTable")!.innerHTML = "";
    }
  }, [surveyDataTable]);

  return (
    <div id="surveyDataTable" />
  );
}