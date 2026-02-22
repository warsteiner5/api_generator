import { LinkAndPublishPublicOfferOrderModelAlt } from '../../models/link-and-publish-public-offer-order-model-alt.interface';
import { OrderLinkAndPublishPublicOfferOrder$Params } from '../../../swagger/fn/order/order-link-and-publish-public-offer-order';
import { apiLinkAndPublishPublicOfferOrderModelAltDtoAdapter } from '../../adapters/models/api-link-and-publish-public-offer-order-model.adapter';

// @ts-ignore
export interface OrderLinkAndPublishPublicOfferOrderParams {
  body?: LinkAndPublishPublicOfferOrderModelAlt;
}

export function orderLinkAndPublishPublicOfferOrderAdapter(params?: OrderLinkAndPublishPublicOfferOrderParams): OrderLinkAndPublishPublicOfferOrder$Params {
  if (!params) {
    return {} as OrderLinkAndPublishPublicOfferOrder$Params;
  }
  return {
      body: apiLinkAndPublishPublicOfferOrderModelAltDtoAdapter(params.body),
  };
}
