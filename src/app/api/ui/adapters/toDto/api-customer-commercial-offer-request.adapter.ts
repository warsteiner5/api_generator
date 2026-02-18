import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { ApiCustomerCommercialOfferRequestAltDto } from '../../../swagger/models/api-customer-commercial-offer-request';
import { adaptApiHumanometrOptionsAltDto } from './api-humanometr-options.adapter';

export function adaptApiCustomerCommercialOfferRequestAltDto(source?: CustomerCommercialOfferRequestAlt | null): ApiCustomerCommercialOfferRequestAltDto {
  return {
    CustomerEmail: source?.customerEmail,
    FileIds: source?.fileIds ?? [],
    HumanometrOptions: adaptApiHumanometrOptionsAltDto(source?.humanometrOptions),
    Message: source?.message,
  };
}
