import { ApiMarketJsonResultOfMarketEmployeeShortInfo } from '../../../swagger/models/api-market-json-result-of-market-employee-short-info';
import { MarketJsonResultOfMarketEmployeeShortInfo } from '../../models/market-json-result-of-market-employee-short-info.interface';

export function adaptMarketJsonResultOfMarketEmployeeShortInfoToUI(source?: ApiMarketJsonResultOfMarketEmployeeShortInfo | null): MarketJsonResultOfMarketEmployeeShortInfo {
  return (source ?? {}) as MarketJsonResultOfMarketEmployeeShortInfo;
}
