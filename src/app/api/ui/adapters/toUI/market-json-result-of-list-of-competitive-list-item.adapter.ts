import { ApiMarketJsonResultOfListOfCompetitiveListItemDto } from '../../../swagger/models/api-market-json-result-of-list-of-competitive-list-item-dto';
import { MarketJsonResultOfListOfCompetitiveListItem } from '../../models/market-json-result-of-list-of-competitive-list-item.interface';

export function adaptMarketJsonResultOfListOfCompetitiveListItemToUI(source?: ApiMarketJsonResultOfListOfCompetitiveListItemDto | null): MarketJsonResultOfListOfCompetitiveListItem {
  return (source ?? {}) as MarketJsonResultOfListOfCompetitiveListItem;
}
