import { ParticipantRatingExportFeedbackToExcel$Params } from '../../../swagger/fn/participant-rating/participant-rating-export-feedback-to-excel';

export interface ParticipantRatingExportFeedbackToExcelParams {
  body?: number[];
}

export const participantRatingExportFeedbackToExcelParamsAdapter = {
  adapt(params?: ParticipantRatingExportFeedbackToExcelParams): ParticipantRatingExportFeedbackToExcel$Params {
    if (!params) {
      return {} as ParticipantRatingExportFeedbackToExcel$Params;
    }
    return {
      body: params.body,
    };
  }
};
