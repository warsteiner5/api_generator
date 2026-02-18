import { QuotationSessionImportDetailsRequestAlt } from '../../models/quotation-session-import-details-request-alt.interface';
import { ApiQuotationSessionImportDetailsRequestAltDto } from '../../../swagger/models/api-quotation-session-import-details-request';

export function adaptApiQuotationSessionImportDetailsRequestAltDto(source?: QuotationSessionImportDetailsRequestAlt | null): ApiQuotationSessionImportDetailsRequestAltDto {
  return {
    FileGuid: source?.fileGuid,
    IsManualEnterPriceForEachProduct: source?.isManualEnterPriceForEachProduct,
  };
}
