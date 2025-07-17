'use client';

import { useEffect, useRef } from 'react';
import {
  ICreatorOptions,
  ICreatorTheme,
  getLocaleStrings,
  registerCreatorTheme
} from 'survey-creator-core';
import {
  SurveyCreatorComponent,
  SurveyCreator
} from 'survey-creator-react';
import { ComputedUpdater, Action, SurveyModel, SvgRegistry } from 'survey-core';
import { IDocOptions, SurveyPDF } from 'survey-pdf';
import 'survey-core/survey-core.css';
import 'survey-creator-core/survey-creator-core.css';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/ext-searchbox';
import SurveyCreatorTheme from 'survey-creator-core/themes';
import { creatorTheme } from '../styles/form-builder-theme';

registerCreatorTheme(SurveyCreatorTheme);

function addCustomTheme(theme: ICreatorTheme, userFriendlyThemeName: string) {
  const enLocale = getLocaleStrings('en');
  const themeName = theme.themeName || 'customTheme';
  (enLocale.creatortheme.names as Record<string, string>)[themeName] = userFriendlyThemeName;
  registerCreatorTheme(theme);
}

addCustomTheme(creatorTheme, 'Custom Theme');

const defaultCreatorOptions: ICreatorOptions = {
  showTranslationTab: true
};

export default function FormBuilderComponent(props: {
  onSaveSurvey: (json: object) => void;
  json?: object;
  options?: ICreatorOptions;
}) {
  const creatorRef = useRef<SurveyCreator | null>(null);

  if (!creatorRef.current) {
    const creator = new SurveyCreator(props.options || defaultCreatorOptions);

    creator.autoSaveEnabled = true;
    creator.saveSurveyFunc = (
      no: number,
      callback: (no: number, success: boolean) => void
    ) => {
      props.onSaveSurvey(creator.JSON);
      callback(no, true);
    };

    creator.applyCreatorTheme(creatorTheme);

    function savePdf(survey: SurveyModel) {
      const pdfDocOptions: IDocOptions = {
        fontSize: 14,
        margins: {
            left: 10,
            right: 10,
            top: 10,
            bot: 10
        },
        format: [210, 297]
      };
      const surveyPDF = new SurveyPDF(survey.toJSON(), pdfDocOptions);
      surveyPDF.readOnly = survey.pdfReadonly;
      surveyPDF.locale = survey.locale;
      surveyPDF.data = survey.data;
      surveyPDF.save(survey.pdfFileName);
    }
    const customIcon = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM12 13v4.17l-1.59-1.58L9 17l4 4 4-4-1.41-1.41L13 17.17V13h-1z"/></svg>';
    SvgRegistry.registerIcon("icon-savepdf", customIcon);
    const savePdfAction = new Action({
      id: 'svd-save-pdf',
      title: 'Save as PDF',
      iconName: 'icon-savepdf',
      visible: new ComputedUpdater(() => creator.activeTab === 'preview'),
      enabled: true,
      action: () => {
        const surveyModel = (creator.getPlugin("preview") as any).model.survey as SurveyModel;
        savePdf(surveyModel);
      }
    });
    creator.toolbar.actions.push(savePdfAction);
    creator.footerToolbar.actions.push(savePdfAction);

    creatorRef.current = creator;
  }

  const creator = creatorRef.current;

  useEffect(() => {
    if (props.json) {
      creator.JSON = props.json;
    }
  }, [props.json, creator]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}
