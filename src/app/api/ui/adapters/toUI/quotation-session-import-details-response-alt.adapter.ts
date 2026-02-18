import { ApiQuotationSessionImportDetailsResponseAltDto } from '../../../swagger/models/api-quotation-session-import-details-response';
import { QuotationSessionImportDetailsResponseAlt } from '../../models/quotation-session-import-details-response-alt.interface';
import { adaptQuotationSessionDetailAltToUI } from './quotation-session-detail-alt.adapter';

export function adaptQuotationSessionImportDetailsResponseAltToUI(source?: ApiQuotationSessionImportDetailsResponseAltDto | null): QuotationSessionImportDetailsResponseAlt {
  return {
    details: (source?.Details ?? []).map((item) => adaptQuotationSessionDetailAltToUI(item)),
    errorText: source?.ErrorText ?? '',
    errorsFileUrl: source?.ErrorsFileUrl ?? '',
    isSuccess: source?.IsSuccess ?? false,
  };
}
