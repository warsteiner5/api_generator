import { MarketJsonResultOfCompetitiveListItemForView } from '../../models/market-json-result-of-competitive-list-item-for-view.interface';
import { ApiMarketJsonResultOfCompetitiveListItemForViewDto } from '../../../swagger/models/api-market-json-result-of-competitive-list-item-for-view-dto';

export function adaptApiMarketJsonResultOfCompetitiveListItemForViewDto(source?: MarketJsonResultOfCompetitiveListItemForView | null): ApiMarketJsonResultOfCompetitiveListItemForViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfCompetitiveListItemForViewDto;
}
