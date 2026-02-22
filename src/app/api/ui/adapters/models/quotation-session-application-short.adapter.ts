import { ApiQuotationSessionApplicationShortDto } from '../../../swagger/models/api-quotation-session-application-short-dto';
import { QuotationSessionApplicationShort } from '../../models/quotation-session-application-short.interface';

export const quotationSessionApplicationShortAdapter = (source?: ApiQuotationSessionApplicationShortDto | null): QuotationSessionApplicationShort => {
  return (source ?? {}) as QuotationSessionApplicationShort;
}
