import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { OffersSendCustomerCommercialOffer$Params } from '../../../swagger/fn/offers/offers-send-customer-commercial-offer';
import { adaptApiCustomerCommercialOfferRequestAltDto } from '../../adapters/toDto/api-customer-commercial-offer-request.adapter';

export interface OffersSendCustomerCommercialOfferParams {
  id: number;
  body?: CustomerCommercialOfferRequestAlt;
}

export const offersSendCustomerCommercialOfferParamsAdapter = {
  adapt(params?: OffersSendCustomerCommercialOfferParams): OffersSendCustomerCommercialOffer$Params {
    if (!params) {
      return {} as OffersSendCustomerCommercialOffer$Params;
    }
    return {
      id: params.id,
      body: adaptApiCustomerCommercialOfferRequestAltDto(params.body),
    };
  }
};
