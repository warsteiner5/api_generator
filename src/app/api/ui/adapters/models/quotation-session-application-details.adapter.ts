import { ApiQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-quotation-session-application-details-dto';
import { QuotationSessionApplicationDetails } from '../../models/quotation-session-application-details.interface';

export const quotationSessionApplicationDetailsAdapter = (source?: ApiQuotationSessionApplicationDetailsDto | null): QuotationSessionApplicationDetails => {
  return (source ?? {}) as QuotationSessionApplicationDetails;
}
