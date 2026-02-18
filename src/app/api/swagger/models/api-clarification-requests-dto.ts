/* tslint:disable */
/* eslint-disable */
import { ApiClarificationRequestListItemDto } from '../models/api-clarification-request-list-item-dto';
import { ApiClarificationRequestSideEnum } from '../models/api-clarification-request-side-enum';
export interface ApiClarificationRequestsDto {
  Requests?: Array<ApiClarificationRequestListItemDto> | null;
  Side?: ApiClarificationRequestSideEnum;
}
