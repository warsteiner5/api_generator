import { DealDocument } from './deal-document.interface';

export interface ActualDocumentInfoAlt {
  description: string;
  documentType: number;
  documents: DealDocument[];
}
