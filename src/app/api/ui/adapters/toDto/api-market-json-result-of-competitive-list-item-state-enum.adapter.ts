import { MarketJsonResultOfCompetitiveListItemStateEnum } from '../../models/market-json-result-of-competitive-list-item-state-enum.interface';
import { ApiMarketJsonResultOfCompetitiveListItemStateEnum } from '../../../swagger/models/api-market-json-result-of-competitive-list-item-state-enum';

export function adaptApiMarketJsonResultOfCompetitiveListItemStateEnum(source?: MarketJsonResultOfCompetitiveListItemStateEnum | null): ApiMarketJsonResultOfCompetitiveListItemStateEnum {
  return (source ?? {}) as ApiMarketJsonResultOfCompetitiveListItemStateEnum;
}
