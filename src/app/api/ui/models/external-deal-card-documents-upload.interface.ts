import { ExternalDealCardDocument } from './external-deal-card-document.interface';

export interface ExternalDealCardDocumentsUpload {
  dealId: number;
  documents: ExternalDealCardDocument[];
}
