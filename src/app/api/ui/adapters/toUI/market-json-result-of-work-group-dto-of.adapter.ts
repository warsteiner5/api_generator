import { ApiMarketJsonResultOfWorkGroupDtoOf } from '../../../swagger/models/api-market-json-result-of-work-group-dto-of';
import { MarketJsonResultOfWorkGroupDtoOf } from '../../models/market-json-result-of-work-group-dto-of.interface';

export function adaptMarketJsonResultOfWorkGroupDtoOfToUI(source?: ApiMarketJsonResultOfWorkGroupDtoOf | null): MarketJsonResultOfWorkGroupDtoOf {
  return (source ?? {}) as MarketJsonResultOfWorkGroupDtoOf;
}
