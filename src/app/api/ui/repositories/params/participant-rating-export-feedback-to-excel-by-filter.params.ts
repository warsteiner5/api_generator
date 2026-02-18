import { ParticipantFeedbackRatingFilter } from '../../models/participant-feedback-rating-filter.interface';
import { ParticipantRatingExportFeedbackToExcelByFilter$Params } from '../../../swagger/fn/participant-rating/participant-rating-export-feedback-to-excel-by-filter';
import { adaptApiParticipantFeedbackRatingFilterDto } from '../../adapters/toDto/api-participant-feedback-rating-filter-dto.adapter';

export interface ParticipantRatingExportFeedbackToExcelByFilterParams {
  body?: ParticipantFeedbackRatingFilter;
}

export const participantRatingExportFeedbackToExcelByFilterParamsAdapter = {
  adapt(params?: ParticipantRatingExportFeedbackToExcelByFilterParams): ParticipantRatingExportFeedbackToExcelByFilter$Params {
    if (!params) {
      return {} as ParticipantRatingExportFeedbackToExcelByFilter$Params;
    }
    return {
      body: adaptApiParticipantFeedbackRatingFilterDto(params.body),
    };
  }
};
