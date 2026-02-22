import { ApiQuotationSessionApplicationConditionsDto } from '../../../swagger/models/api-quotation-session-application-conditions-dto';
import { QuotationSessionApplicationConditions } from '../../models/quotation-session-application-conditions.interface';

export const quotationSessionApplicationConditionsAdapter = (source?: ApiQuotationSessionApplicationConditionsDto | null): QuotationSessionApplicationConditions => {
  return {
    conditionsOfPayment: source?.ConditionsOfPayment,
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
  };
}
