import { ApiMarketJsonResultOfCompetitiveListItemStateEnum } from '../../../swagger/models/api-market-json-result-of-competitive-list-item-state-enum';
import { MarketJsonResultOfCompetitiveListItemStateEnum } from '../../models/market-json-result-of-competitive-list-item-state-enum.interface';

export function adaptMarketJsonResultOfCompetitiveListItemStateEnumToUI(source?: ApiMarketJsonResultOfCompetitiveListItemStateEnum | null): MarketJsonResultOfCompetitiveListItemStateEnum {
  return (source ?? {}) as MarketJsonResultOfCompetitiveListItemStateEnum;
}
