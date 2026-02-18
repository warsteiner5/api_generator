import { DocumentDto2 } from './document-dto-2.interface';

export interface ClarificationResponseCreate {
  documents: DocumentDto2[];
  responseText: string;
}
