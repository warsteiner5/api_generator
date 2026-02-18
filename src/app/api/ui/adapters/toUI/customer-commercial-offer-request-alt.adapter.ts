import { ApiCustomerCommercialOfferRequestAltDto } from '../../../swagger/models/api-customer-commercial-offer-request';
import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { adaptHumanometrOptionsAltToUI } from './humanometr-options-alt.adapter';

export function adaptCustomerCommercialOfferRequestAltToUI(source?: ApiCustomerCommercialOfferRequestAltDto | null): CustomerCommercialOfferRequestAlt {
  return {
    customerEmail: source?.CustomerEmail ?? '',
    fileIds: source?.FileIds ?? [],
    humanometrOptions: adaptHumanometrOptionsAltToUI(source?.HumanometrOptions),
    message: source?.Message ?? '',
  };
}
