import { ApiOrderAgreementDetailAltDto } from '../../../swagger/models/api-order-agreement-detail';
import { OrderAgreementDetailAlt } from '../../models/order-agreement-detail-alt.interface';

export function adaptOrderAgreementDetailAltToUI(source?: ApiOrderAgreementDetailAltDto | null): OrderAgreementDetailAlt {
  return {
    price: source?.Price ?? 0,
    priceOfferId: source?.PriceOfferId ?? 0,
    quantity: source?.Quantity ?? 0,
  };
}
