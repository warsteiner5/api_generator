import { ApiQuotationSessionApplicationShortDto } from '../../../swagger/models/api-quotation-session-application-short-dto';
import { QuotationSessionApplicationShort } from '../../models/quotation-session-application-short.interface';

export function adaptQuotationSessionApplicationShortToUI(source?: ApiQuotationSessionApplicationShortDto | null): QuotationSessionApplicationShort {
  return (source ?? {}) as QuotationSessionApplicationShort;
}
