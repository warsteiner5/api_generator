import { ExternalDealCardDocument } from './external-deal-card-document.interface';

// @ts-ignore
export interface ExternalDealCardDocumentsUpload {
  dealId: number;
  documents: ExternalDealCardDocument[];
}
