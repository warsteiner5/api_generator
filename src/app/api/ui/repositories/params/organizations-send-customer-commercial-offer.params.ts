import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { OrganizationsSendCustomerCommercialOffer$Params } from '../../../swagger/fn/organizations/organizations-send-customer-commercial-offer';
import { adaptApiCustomerCommercialOfferRequestAltDto } from '../../adapters/toDto/api-customer-commercial-offer-request.adapter';

export interface OrganizationsSendCustomerCommercialOfferParams {
  guid: string;
  body?: CustomerCommercialOfferRequestAlt;
}

export const organizationsSendCustomerCommercialOfferParamsAdapter = {
  adapt(params?: OrganizationsSendCustomerCommercialOfferParams): OrganizationsSendCustomerCommercialOffer$Params {
    if (!params) {
      return {} as OrganizationsSendCustomerCommercialOffer$Params;
    }
    return {
      guid: params.guid,
      body: adaptApiCustomerCommercialOfferRequestAltDto(params.body),
    };
  }
};
