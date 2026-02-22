import { CustomerCommercialOfferRequestAlt } from '../../models/customer-commercial-offer-request-alt.interface';
import { OffersSendCustomerCommercialOffer$Params } from '../../../swagger/fn/offers/offers-send-customer-commercial-offer';
import { apiCustomerCommercialOfferRequestAltDtoAdapter } from '../../adapters/models/api-customer-commercial-offer-request.adapter';

// @ts-ignore
export interface OffersSendCustomerCommercialOfferParams {
  id: number;
  body?: CustomerCommercialOfferRequestAlt;
}

export function offersSendCustomerCommercialOfferAdapter(params?: OffersSendCustomerCommercialOfferParams): OffersSendCustomerCommercialOffer$Params {
  if (!params) {
    return {} as OffersSendCustomerCommercialOffer$Params;
  }
  return {
      id: params.id,
      body: apiCustomerCommercialOfferRequestAltDtoAdapter(params.body),
  };
}
