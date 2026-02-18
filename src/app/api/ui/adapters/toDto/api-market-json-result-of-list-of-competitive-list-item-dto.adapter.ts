import { MarketJsonResultOfListOfCompetitiveListItem } from '../../models/market-json-result-of-list-of-competitive-list-item.interface';
import { ApiMarketJsonResultOfListOfCompetitiveListItemDto } from '../../../swagger/models/api-market-json-result-of-list-of-competitive-list-item-dto';

export function adaptApiMarketJsonResultOfListOfCompetitiveListItemDto(source?: MarketJsonResultOfListOfCompetitiveListItem | null): ApiMarketJsonResultOfListOfCompetitiveListItemDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfCompetitiveListItemDto;
}
