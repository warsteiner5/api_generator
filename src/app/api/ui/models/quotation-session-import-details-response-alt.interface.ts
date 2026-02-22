import { QuotationSessionDetailAlt } from './quotation-session-detail-alt.interface';

// @ts-ignore
export interface QuotationSessionImportDetailsResponseAlt {
  details: QuotationSessionDetailAlt[];
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
}
