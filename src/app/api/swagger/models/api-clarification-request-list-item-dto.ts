/* tslint:disable */
/* eslint-disable */
import { ApiApplicationClarificationRequestResponseDto } from '../models/api-application-clarification-request-response-dto';
import { ApiCommonClarificationRequestStateEnum } from '../models/api-common-clarification-request-state-enum';
import { ApiDocumentDto2 } from '../models/api-document-dto-2';
export interface ApiClarificationRequestListItemDto {
  CreateDate?: string;
  Documents?: Array<ApiDocumentDto2> | null;
  ExpireResponseDate?: string | null;
  ExternalId?: string | null;
  Id?: number;
  ParticipantGuid?: string;
  ParticipantName?: string | null;
  RequestText?: string | null;
  Response?: ApiApplicationClarificationRequestResponseDto | null;
  ResponseAllowed?: boolean;
  ResponseDate?: string | null;
  State?: ApiCommonClarificationRequestStateEnum;
  TradeId?: number;
}
