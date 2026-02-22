import { ApiPriceRegionDetailDto } from '../../../swagger/models/api-price-region-detail-dto';
import { PriceRegionDetail } from '../../models/price-region-detail.interface';

export const priceRegionDetailAdapter = (source?: ApiPriceRegionDetailDto | null): PriceRegionDetail => {
  return (source ?? {}) as PriceRegionDetail;
}
