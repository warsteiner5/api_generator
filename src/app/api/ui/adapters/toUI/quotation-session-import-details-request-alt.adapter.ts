import { ApiQuotationSessionImportDetailsRequestAltDto } from '../../../swagger/models/api-quotation-session-import-details-request';
import { QuotationSessionImportDetailsRequestAlt } from '../../models/quotation-session-import-details-request-alt.interface';

export function adaptQuotationSessionImportDetailsRequestAltToUI(source?: ApiQuotationSessionImportDetailsRequestAltDto | null): QuotationSessionImportDetailsRequestAlt {
  return {
    fileGuid: source?.FileGuid ?? '',
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct ?? false,
  };
}
