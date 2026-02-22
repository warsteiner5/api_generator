import { QuotationSessionApplicationShort } from '../../models/quotation-session-application-short.interface';
import { ApiQuotationSessionApplicationShortDto } from '../../../swagger/models/api-quotation-session-application-short-dto';

export const apiQuotationSessionApplicationShortDtoAdapter = (source?: QuotationSessionApplicationShort | null): ApiQuotationSessionApplicationShortDto => {
  return (source ?? {}) as ApiQuotationSessionApplicationShortDto;
}
