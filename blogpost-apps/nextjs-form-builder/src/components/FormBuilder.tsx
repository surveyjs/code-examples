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
import 'survey-core/survey-core.css';
import 'survey-creator-core/survey-creator-core.css';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/ext-searchbox';
import SurveyCreatorTheme from 'survey-creator-core/themes';
import { creatorTheme } from '../styles/form-builder-theme';
import { createPdfAction } from '../utils/surveyPdf';
import { Action } from 'survey-core';

registerCreatorTheme(SurveyCreatorTheme);

function addCustomTheme(theme: ICreatorTheme, userFriendlyThemeName: string) {
  const enLocale = getLocaleStrings('en');
  const themeName = theme.themeName || 'customTheme';
  (enLocale.creatortheme.names as Record<string, string>)[themeName] = userFriendlyThemeName;
  registerCreatorTheme(theme);
}

addCustomTheme(creatorTheme, 'Custom Theme');

const defaultCreatorOptions: ICreatorOptions = {
  showTranslationTab: true,
  showThemeTab: true
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

    const savePdfAction: Action = createPdfAction(creator);
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
