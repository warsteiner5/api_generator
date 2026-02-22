import { EquivalentTablePriceRegionDetail } from '../../models/equivalent-table-price-region-detail.interface';
import { ApiEquivalentTablePriceRegionDetailDto } from '../../../swagger/models/api-equivalent-table-price-region-detail-dto';

export const apiEquivalentTablePriceRegionDetailDtoAdapter = (source?: EquivalentTablePriceRegionDetail | null): ApiEquivalentTablePriceRegionDetailDto => {
  return {
    DeliveryPlace: source?.deliveryPlace,
    KladrCode: source?.kladrCode,
    KladrName: source?.kladrName,
    MinQuantity: source?.minQuantity,
    Price: source?.price,
    Quantity: source?.quantity,
  };
}
