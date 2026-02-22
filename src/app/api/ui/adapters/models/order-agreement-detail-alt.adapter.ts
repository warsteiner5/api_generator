import { ApiOrderAgreementDetailAltDto } from '../../../swagger/models/api-order-agreement-detail';
import { OrderAgreementDetailAlt } from '../../models/order-agreement-detail-alt.interface';

export const orderAgreementDetailAltAdapter = (source?: ApiOrderAgreementDetailAltDto | null): OrderAgreementDetailAlt => {
  return {
    price: source?.Price,
    priceOfferId: source?.PriceOfferId,
    quantity: source?.Quantity,
  };
}
