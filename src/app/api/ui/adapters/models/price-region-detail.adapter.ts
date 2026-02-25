import { ApiPriceRegionDetailDto } from '../../../swagger/models/api-price-region-detail-dto';
import { PriceRegionDetail } from '../../models/price-region-detail.interface';
import { entityDtoOfIntegerAdapter } from './entity-dto-of-integer.adapter';
import { priceTypesEnumAdapter } from '../enums/price-types-enum.adapter';

export const priceRegionDetailAdapter = (source?: ApiPriceRegionDetailDto | null): PriceRegionDetail => {
  return {
    ...entityDtoOfIntegerAdapter(source as unknown as Parameters<typeof entityDtoOfIntegerAdapter>[0]),
    unitPrice: source?.UnitPrice,
    quantity: source?.Quantity,
    minQuantity: source?.MinQuantity,
    possibleDeliveryBySeller: source?.PossibleDeliveryBySeller,
    possibleSelfDelivery: source?.PossibleSelfDelivery,
    possibleSendByTransportCompany: source?.PossibleSendByTransportCompany,
    deliveryPlace: source?.DeliveryPlace,
    kladrCode: source?.KladrCode,
    kladrName: source?.KladrName,
    type: source?.Type === null ? undefined : priceTypesEnumAdapter(source?.Type),
  };
}
