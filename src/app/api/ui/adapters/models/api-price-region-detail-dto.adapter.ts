import { PriceRegionDetail } from '../../models/price-region-detail.interface';
import { ApiPriceRegionDetailDto } from '../../../swagger/models/api-price-region-detail-dto';
import { apiEntityDtoOfIntegerAdapter } from './api-entity-dto-of-integer.adapter';
import { apiPriceTypesEnumAdapter } from '../enums/api-price-types-enum.adapter';

export const apiPriceRegionDetailDtoAdapter = (source?: PriceRegionDetail | null): ApiPriceRegionDetailDto => {
  return {
    ...apiEntityDtoOfIntegerAdapter(source as unknown as Parameters<typeof apiEntityDtoOfIntegerAdapter>[0]),
    UnitPrice: source?.unitPrice,
    Quantity: source?.quantity,
    MinQuantity: source?.minQuantity,
    PossibleDeliveryBySeller: source?.possibleDeliveryBySeller,
    PossibleSelfDelivery: source?.possibleSelfDelivery,
    PossibleSendByTransportCompany: source?.possibleSendByTransportCompany,
    DeliveryPlace: source?.deliveryPlace,
    KladrCode: source?.kladrCode,
    KladrName: source?.kladrName,
    Type: source?.type === null ? undefined : apiPriceTypesEnumAdapter(source?.type),
  };
}
