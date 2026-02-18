import { ApiMzPriceListDto } from '../../../swagger/models/api-mz-price-list-dto';
import { MzPriceList } from '../../models/mz-price-list.interface';

export function adaptMzPriceListToUI(source?: ApiMzPriceListDto | null): MzPriceList {
  return (source ?? {}) as MzPriceList;
}
