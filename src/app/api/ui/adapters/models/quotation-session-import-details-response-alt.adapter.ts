import { ApiQuotationSessionImportDetailsResponseAltDto } from '../../../swagger/models/api-quotation-session-import-details-response';
import { QuotationSessionImportDetailsResponseAlt } from '../../models/quotation-session-import-details-response-alt.interface';
import { quotationSessionDetailAltAdapter } from './quotation-session-detail-alt.adapter';

export const quotationSessionImportDetailsResponseAltAdapter = (source?: ApiQuotationSessionImportDetailsResponseAltDto | null): QuotationSessionImportDetailsResponseAlt => {
  return {
    details: source?.Details?.map((item) => quotationSessionDetailAltAdapter(item)),
    errorText: source?.ErrorText,
    errorsFileUrl: source?.ErrorsFileUrl,
    isSuccess: source?.IsSuccess,
  };
}
