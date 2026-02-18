/* tslint:disable */
/* eslint-disable */
import { ApiParticipantFeedbackRatingInfoDto } from '../models/api-participant-feedback-rating-info-dto';
export interface ApiSearchResultOfParticipantFeedbackRatingInfoDto {
  CurrentPage?: number;
  Infos?: Array<ApiParticipantFeedbackRatingInfoDto> | null;
  ShowTotal?: boolean;
  TotalPages?: number;
  TotalRecords?: number;
}
