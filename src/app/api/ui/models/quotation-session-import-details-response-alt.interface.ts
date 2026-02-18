import { QuotationSessionDetailAlt } from './quotation-session-detail-alt.interface';

export interface QuotationSessionImportDetailsResponseAlt {
  details: QuotationSessionDetailAlt[];
  errorText: string;
  errorsFileUrl: string;
  isSuccess: boolean;
}
