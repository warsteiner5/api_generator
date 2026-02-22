import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { OrganizationsSendCustomerCommercialOffer$Params } from '../../../swagger/fn/organizations/organizations-send-customer-commercial-offer';
import { apiCustomerCommercialOfferRequestAltDtoAdapter } from '../../adapters/models/api-customer-commercial-offer-request.adapter';

// @ts-ignore
export interface OrganizationsSendCustomerCommercialOfferParams {
  guid: string;
  body?: CustomerCommercialOfferRequestAlt;
}

export function organizationsSendCustomerCommercialOfferAdapter(params?: OrganizationsSendCustomerCommercialOfferParams): OrganizationsSendCustomerCommercialOffer$Params {
  if (!params) {
    return {} as OrganizationsSendCustomerCommercialOffer$Params;
  }
  return {
      guid: params.guid,
      body: apiCustomerCommercialOfferRequestAltDtoAdapter(params.body),
  };
}
