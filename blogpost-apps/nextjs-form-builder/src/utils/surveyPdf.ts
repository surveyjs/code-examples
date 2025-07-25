import { SurveyModel, SvgRegistry, Action, ComputedUpdater } from "survey-core";
import { SurveyPDF, IDocOptions } from "survey-pdf";
import { SurveyCreator } from 'survey-creator-react';

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
export function createPdfAction(creator: SurveyCreator): Action {    
    const customIcon = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM12 13v4.17l-1.59-1.58L9 17l4 4 4-4-1.41-1.41L13 17.17V13h-1z"/></svg>';
    SvgRegistry.registerIcon("icon-savepdf", customIcon);

    const savePdfAction = new Action({
        id: 'svd-save-pdf',
        title: 'Save as PDF',
        iconName: 'icon-savepdf',
        visible: new ComputedUpdater(() => creator.activeTab === 'preview'),
        enabled: true,
        action: () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const surveyModel = (creator.getPlugin("preview") as any).model.survey as SurveyModel;
            savePdf(surveyModel);
        }
        });
        return savePdfAction;
}