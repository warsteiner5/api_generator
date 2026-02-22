import { OrderDetailAlt } from '../../models/order-detail-alt.interface';
import { ApiOrderDetailAltDto } from '../../../swagger/models/api-order-detail';
import { apiTruTypeEnumAdapter } from '../enums/api-tru-type-enum.adapter';

export const apiOrderDetailAltDtoAdapter = (source?: OrderDetailAlt | null): ApiOrderDetailAltDto => {
  return {
    CartItemId: source?.cartItemId,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    KladrRegionCode: source?.kladrRegionCode,
    KsrCode: source?.ksrCode,
    KsrUnitQuantity: source?.ksrUnitQuantity,
    OfferId: source?.offerId,
    Quantity: source?.quantity,
    Type: source?.type === null ? undefined : apiTruTypeEnumAdapter(source?.type),
    UnitPrice: source?.unitPrice,
    UnitPriceRegion: source?.unitPriceRegion,
  };
}
