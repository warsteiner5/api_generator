import { LinkAndPublishPublicOfferOrderModelAlt } from '../../models/link-and-publish-public-offer-order-model-alt.interface';
import { OrderLinkAndPublishPublicOfferOrder$Params } from '../../../swagger/fn/order/order-link-and-publish-public-offer-order';
import { adaptApiLinkAndPublishPublicOfferOrderModelAltDto } from '../../adapters/toDto/api-link-and-publish-public-offer-order-model.adapter';

export interface OrderLinkAndPublishPublicOfferOrderParams {
  body?: LinkAndPublishPublicOfferOrderModelAlt;
}

export const orderLinkAndPublishPublicOfferOrderParamsAdapter = {
  adapt(params?: OrderLinkAndPublishPublicOfferOrderParams): OrderLinkAndPublishPublicOfferOrder$Params {
    if (!params) {
      return {} as OrderLinkAndPublishPublicOfferOrder$Params;
    }
    return {
      body: adaptApiLinkAndPublishPublicOfferOrderModelAltDto(params.body),
    };
  }
};
