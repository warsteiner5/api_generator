import { ApiQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-quotation-session-application-details-dto';
import { QuotationSessionApplicationDetails } from '../../models/quotation-session-application-details.interface';

export function adaptQuotationSessionApplicationDetailsToUI(source?: ApiQuotationSessionApplicationDetailsDto | null): QuotationSessionApplicationDetails {
  return (source ?? {}) as QuotationSessionApplicationDetails;
}
