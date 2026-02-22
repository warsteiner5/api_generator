import { ApiOrderDetailAltDto } from '../../../swagger/models/api-order-detail';
import { OrderDetailAlt } from '../../models/order-detail-alt.interface';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';

export const orderDetailAltAdapter = (source?: ApiOrderDetailAltDto | null): OrderDetailAlt => {
  return {
    cartItemId: source?.CartItemId,
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    kladrRegionCode: source?.KladrRegionCode,
    ksrCode: source?.KsrCode,
    ksrUnitQuantity: source?.KsrUnitQuantity,
    offerId: source?.OfferId,
    quantity: source?.Quantity,
    type: source?.Type === null ? undefined : truTypeEnumAdapter(source?.Type),
    unitPrice: source?.UnitPrice,
    unitPriceRegion: source?.UnitPriceRegion,
  };
}
