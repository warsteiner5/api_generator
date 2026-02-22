import { ApiCustomerCommercialOfferRequestAltDto } from '../../../swagger/models/api-customer-commercial-offer-request';
import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { humanometrOptionsAltAdapter } from './humanometr-options-alt.adapter';

export const customerCommercialOfferRequestAltAdapter = (source?: ApiCustomerCommercialOfferRequestAltDto | null): CustomerCommercialOfferRequestAlt => {
  return {
    customerEmail: source?.CustomerEmail,
    fileIds: source?.FileIds,
    humanometrOptions: source?.HumanometrOptions === null ? undefined : humanometrOptionsAltAdapter(source?.HumanometrOptions),
    message: source?.Message,
  };
}
