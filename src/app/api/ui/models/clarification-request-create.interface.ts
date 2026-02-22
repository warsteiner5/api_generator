import { DocumentDto2 } from './document-dto-2.interface';

// @ts-ignore
export interface ClarificationRequestCreate {
  documents: DocumentDto2[];
  expireResponseDate: string;
  participantGuid: string;
  requestText: string;
}
