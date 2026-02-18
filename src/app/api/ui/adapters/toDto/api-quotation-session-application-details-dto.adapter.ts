import { QuotationSessionApplicationDetails } from '../../models/quotation-session-application-details.interface';
import { ApiQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-quotation-session-application-details-dto';

export function adaptApiQuotationSessionApplicationDetailsDto(source?: QuotationSessionApplicationDetails | null): ApiQuotationSessionApplicationDetailsDto {
  return (source ?? {}) as ApiQuotationSessionApplicationDetailsDto;
}
