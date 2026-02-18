import { PriceRegionDetail } from '../../models/price-region-detail.interface';
import { ApiPriceRegionDetailDto } from '../../../swagger/models/api-price-region-detail-dto';

export function adaptApiPriceRegionDetailDto(source?: PriceRegionDetail | null): ApiPriceRegionDetailDto {
  return (source ?? {}) as ApiPriceRegionDetailDto;
}
