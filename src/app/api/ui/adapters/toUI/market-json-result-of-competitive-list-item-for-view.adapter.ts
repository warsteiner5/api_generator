import { ApiMarketJsonResultOfCompetitiveListItemForViewDto } from '../../../swagger/models/api-market-json-result-of-competitive-list-item-for-view-dto';
import { MarketJsonResultOfCompetitiveListItemForView } from '../../models/market-json-result-of-competitive-list-item-for-view.interface';

export function adaptMarketJsonResultOfCompetitiveListItemForViewToUI(source?: ApiMarketJsonResultOfCompetitiveListItemForViewDto | null): MarketJsonResultOfCompetitiveListItemForView {
  return (source ?? {}) as MarketJsonResultOfCompetitiveListItemForView;
}
