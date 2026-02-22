import { QuotationSessionApplicationDetails } from '../../models/quotation-session-application-details.interface';
import { ApiQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-quotation-session-application-details-dto';

export const apiQuotationSessionApplicationDetailsDtoAdapter = (source?: QuotationSessionApplicationDetails | null): ApiQuotationSessionApplicationDetailsDto => {
  return (source ?? {}) as ApiQuotationSessionApplicationDetailsDto;
}
