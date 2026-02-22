import { ParticipantRatingExportFeedbackToExcel$Params } from '../../../swagger/fn/participant-rating/participant-rating-export-feedback-to-excel';

// @ts-ignore
export interface ParticipantRatingExportFeedbackToExcelParams {
  body?: number[];
}

export function participantRatingExportFeedbackToExcelAdapter(params?: ParticipantRatingExportFeedbackToExcelParams): ParticipantRatingExportFeedbackToExcel$Params {
  if (!params) {
    return {} as ParticipantRatingExportFeedbackToExcel$Params;
  }
  return {
      body: params.body,
  };
}
