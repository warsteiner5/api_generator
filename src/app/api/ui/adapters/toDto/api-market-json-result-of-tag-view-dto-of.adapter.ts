import { MarketJsonResultOfTagViewDtoOf } from '../../models/market-json-result-of-tag-view-dto-of.interface';
import { ApiMarketJsonResultOfTagViewDtoOf } from '../../../swagger/models/api-market-json-result-of-tag-view-dto-of';

export function adaptApiMarketJsonResultOfTagViewDtoOf(source?: MarketJsonResultOfTagViewDtoOf | null): ApiMarketJsonResultOfTagViewDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfTagViewDtoOf;
}
