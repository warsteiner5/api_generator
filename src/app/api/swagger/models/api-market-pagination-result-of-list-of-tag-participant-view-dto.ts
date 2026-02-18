/* tslint:disable */
/* eslint-disable */
import { ApiTagParticipantViewDto } from '../models/api-tag-participant-view-dto';
export interface ApiMarketPaginationResultOfListOfTagParticipantViewDto {
  currentPage?: number;
  items?: Array<ApiTagParticipantViewDto> | null;
  total?: number;
  totalPages?: number;
}
