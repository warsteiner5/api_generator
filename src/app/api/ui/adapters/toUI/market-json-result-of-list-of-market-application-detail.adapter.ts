import { ApiMarketJsonResultOfListOfMarketApplicationDetail } from '../../../swagger/models/api-market-json-result-of-list-of-market-application-detail';
import { MarketJsonResultOfListOfMarketApplicationDetail } from '../../models/market-json-result-of-list-of-market-application-detail.interface';

export function adaptMarketJsonResultOfListOfMarketApplicationDetailToUI(source?: ApiMarketJsonResultOfListOfMarketApplicationDetail | null): MarketJsonResultOfListOfMarketApplicationDetail {
  return (source ?? {}) as MarketJsonResultOfListOfMarketApplicationDetail;
}
