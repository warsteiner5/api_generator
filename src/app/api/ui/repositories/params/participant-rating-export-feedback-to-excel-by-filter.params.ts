import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';
import { ParticipantRatingExportFeedbackToExcelByFilter$Params } from '../../../swagger/fn/participant-rating/participant-rating-export-feedback-to-excel-by-filter';
import { apiParticipantFeedbackRatingFilterDtoAdapter } from '../../adapters/models/api-participant-feedback-rating-filter-dto.adapter';

// @ts-ignore
export interface ParticipantRatingExportFeedbackToExcelByFilterParams {
  body?: ParticipantFeedbackRatingFilter;
}

export function participantRatingExportFeedbackToExcelByFilterAdapter(params?: ParticipantRatingExportFeedbackToExcelByFilterParams): ParticipantRatingExportFeedbackToExcelByFilter$Params {
  if (!params) {
    return {} as ParticipantRatingExportFeedbackToExcelByFilter$Params;
  }
  return {
      body: apiParticipantFeedbackRatingFilterDtoAdapter(params.body),
  };
}
