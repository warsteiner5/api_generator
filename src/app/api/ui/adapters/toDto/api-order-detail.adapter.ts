import { OrderDetailAlt } from '../../models/order-detail-alt.interface';
import { ApiOrderDetailAltDto } from '../../../swagger/models/api-order-detail';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';

export function adaptApiOrderDetailAltDto(source?: OrderDetailAlt | null): ApiOrderDetailAltDto {
  return {
    CartItemId: source?.cartItemId,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    KladrRegionCode: source?.kladrRegionCode,
    KsrCode: source?.ksrCode,
    KsrUnitQuantity: source?.ksrUnitQuantity,
    OfferId: source?.offerId,
    Quantity: source?.quantity,
    Type: adaptApiTruTypeEnum(source?.type),
    UnitPrice: source?.unitPrice,
    UnitPriceRegion: source?.unitPriceRegion,
  };
}
