import { DealDocument } from './deal-document.interface';

// @ts-ignore
export interface ActualDocumentInfoAlt {
  description: string;
  documentType: number;
  documents: DealDocument[];
}
