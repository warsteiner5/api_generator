import { ApiEquivalentTablePriceRegionDetailDto } from '../../../swagger/models/api-equivalent-table-price-region-detail-dto';
import { EquivalentTablePriceRegionDetail } from '../../models/equivalent-table-price-region-detail.interface';

export const equivalentTablePriceRegionDetailAdapter = (source?: ApiEquivalentTablePriceRegionDetailDto | null): EquivalentTablePriceRegionDetail => {
  return {
    deliveryPlace: source?.DeliveryPlace,
    kladrCode: source?.KladrCode,
    kladrName: source?.KladrName,
    minQuantity: source?.MinQuantity,
    price: source?.Price,
    quantity: source?.Quantity,
  };
}
