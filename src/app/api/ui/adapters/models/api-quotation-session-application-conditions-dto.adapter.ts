import { QuotationSessionApplicationConditions } from '../../models/quotation-session-application-conditions.interface';
import { ApiQuotationSessionApplicationConditionsDto } from '../../../swagger/models/api-quotation-session-application-conditions-dto';

export const apiQuotationSessionApplicationConditionsDtoAdapter = (source?: QuotationSessionApplicationConditions | null): ApiQuotationSessionApplicationConditionsDto => {
  return {
    ConditionsOfPayment: source?.conditionsOfPayment,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
  };
}
