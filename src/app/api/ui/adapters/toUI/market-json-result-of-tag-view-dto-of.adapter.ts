import { ApiMarketJsonResultOfTagViewDtoOf } from '../../../swagger/models/api-market-json-result-of-tag-view-dto-of';
import { MarketJsonResultOfTagViewDtoOf } from '../../models/market-json-result-of-tag-view-dto-of.interface';

export function adaptMarketJsonResultOfTagViewDtoOfToUI(source?: ApiMarketJsonResultOfTagViewDtoOf | null): MarketJsonResultOfTagViewDtoOf {
  return (source ?? {}) as MarketJsonResultOfTagViewDtoOf;
}
