import { ApplicationClarificationRequestResponse } from './application-clarification-request-response.interface';
import { CommonClarificationRequestStateEnum } from '../enums/common-clarification-request-state.enum';
import { DocumentDto2 } from './document-dto-2.interface';

export interface ClarificationRequestListItem {
  createDate: string;
  documents: DocumentDto2[];
  expireResponseDate: string;
  externalId: string;
  id: number;
  participantGuid: string;
  participantName: string;
  requestText: string;
  response: ApplicationClarificationRequestResponse;
  responseAllowed: boolean;
  responseDate: string;
  state: CommonClarificationRequestStateEnum;
  tradeId: number;
}
