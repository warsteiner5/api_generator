import { MarketJsonResultOfMarketEmployeeShortInfo } from '../../models/market-json-result-of-market-employee-short-info.interface';
import { ApiMarketJsonResultOfMarketEmployeeShortInfo } from '../../../swagger/models/api-market-json-result-of-market-employee-short-info';

export function adaptApiMarketJsonResultOfMarketEmployeeShortInfo(source?: MarketJsonResultOfMarketEmployeeShortInfo | null): ApiMarketJsonResultOfMarketEmployeeShortInfo {
  return (source ?? {}) as ApiMarketJsonResultOfMarketEmployeeShortInfo;
}
