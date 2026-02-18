import { MzPriceList } from '../../models/mz-price-list.interface';
import { ApiMzPriceListDto } from '../../../swagger/models/api-mz-price-list-dto';

export function adaptApiMzPriceListDto(source?: MzPriceList | null): ApiMzPriceListDto {
  return (source ?? {}) as ApiMzPriceListDto;
}
