import { QuotationSessionImportDetailsResponseAlt } from '../../models/quotation-session-import-details-response-alt.interface';
import { ApiQuotationSessionImportDetailsResponseAltDto } from '../../../swagger/models/api-quotation-session-import-details-response';
import { adaptApiQuotationSessionDetailAltDto } from './api-quotation-session-detail.adapter';

export function adaptApiQuotationSessionImportDetailsResponseAltDto(source?: QuotationSessionImportDetailsResponseAlt | null): ApiQuotationSessionImportDetailsResponseAltDto {
  return {
    Details: (source?.details ?? []).map((item) => adaptApiQuotationSessionDetailAltDto(item)),
    ErrorText: source?.errorText,
    ErrorsFileUrl: source?.errorsFileUrl,
    IsSuccess: source?.isSuccess,
  };
}
