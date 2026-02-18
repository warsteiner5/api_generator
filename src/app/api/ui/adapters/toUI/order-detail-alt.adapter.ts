import { ApiOrderDetailAltDto } from '../../../swagger/models/api-order-detail';
import { OrderDetailAlt } from '../../models/order-detail-alt.interface';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';

export function adaptOrderDetailAltToUI(source?: ApiOrderDetailAltDto | null): OrderDetailAlt {
  return {
    cartItemId: source?.CartItemId ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    kladrRegionCode: source?.KladrRegionCode ?? '',
    ksrCode: source?.KsrCode ?? '',
    ksrUnitQuantity: source?.KsrUnitQuantity ?? 0,
    offerId: source?.OfferId ?? 0,
    quantity: source?.Quantity ?? 0,
    type: adaptTruTypeEnumToUI(source?.Type),
    unitPrice: source?.UnitPrice ?? 0,
    unitPriceRegion: source?.UnitPriceRegion ?? '',
  };
}
