import { MzPriceList } from '../../models/mz-price-list.interface';
import { ApiMzPriceListDto } from '../../../swagger/models/api-mz-price-list-dto';

export const apiMzPriceListDtoAdapter = (source?: MzPriceList | null): ApiMzPriceListDto => {
  return (source ?? {}) as ApiMzPriceListDto;
}
