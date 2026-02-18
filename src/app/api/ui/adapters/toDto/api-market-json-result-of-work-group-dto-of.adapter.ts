import { MarketJsonResultOfWorkGroupDtoOf } from '../../models/market-json-result-of-work-group-dto-of.interface';
import { ApiMarketJsonResultOfWorkGroupDtoOf } from '../../../swagger/models/api-market-json-result-of-work-group-dto-of';

export function adaptApiMarketJsonResultOfWorkGroupDtoOf(source?: MarketJsonResultOfWorkGroupDtoOf | null): ApiMarketJsonResultOfWorkGroupDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfWorkGroupDtoOf;
}
