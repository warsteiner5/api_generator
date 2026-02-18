import { ApiEquivalentTablePriceRegionDetailDto } from '../../../swagger/models/api-equivalent-table-price-region-detail-dto';
import { EquivalentTablePriceRegionDetail } from '../../models/equivalent-table-price-region-detail.interface';

export function adaptEquivalentTablePriceRegionDetailToUI(source?: ApiEquivalentTablePriceRegionDetailDto | null): EquivalentTablePriceRegionDetail {
  return {
    deliveryPlace: source?.DeliveryPlace ?? '',
    kladrCode: source?.KladrCode ?? '',
    kladrName: source?.KladrName ?? '',
    minQuantity: source?.MinQuantity ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
  };
}
