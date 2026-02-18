import { MarketJsonResultOfListOfMarketApplicationDetail } from '../../models/market-json-result-of-list-of-market-application-detail.interface';
import { ApiMarketJsonResultOfListOfMarketApplicationDetail } from '../../../swagger/models/api-market-json-result-of-list-of-market-application-detail';

export function adaptApiMarketJsonResultOfListOfMarketApplicationDetail(source?: MarketJsonResultOfListOfMarketApplicationDetail | null): ApiMarketJsonResultOfListOfMarketApplicationDetail {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMarketApplicationDetail;
}
