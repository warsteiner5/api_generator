import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { ApiCustomerCommercialOfferRequestAltDto } from '../../../swagger/models/api-customer-commercial-offer-request';
import { apiHumanometrOptionsAltDtoAdapter } from './api-humanometr-options.adapter';

export const apiCustomerCommercialOfferRequestAltDtoAdapter = (source?: CustomerCommercialOfferRequestAlt | null): ApiCustomerCommercialOfferRequestAltDto => {
  return {
    CustomerEmail: source?.customerEmail,
    FileIds: source?.fileIds,
    HumanometrOptions: source?.humanometrOptions === null ? undefined : apiHumanometrOptionsAltDtoAdapter(source?.humanometrOptions),
    Message: source?.message,
  };
}
