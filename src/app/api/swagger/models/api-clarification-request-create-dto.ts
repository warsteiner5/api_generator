/* tslint:disable */
/* eslint-disable */
import { ApiDocumentDto2 } from '../models/api-document-dto-2';
export interface ApiClarificationRequestCreateDto {
  Documents?: Array<ApiDocumentDto2> | null;
  ExpireResponseDate?: string | null;
  ParticipantGuid?: string;
  RequestText?: string | null;
}
