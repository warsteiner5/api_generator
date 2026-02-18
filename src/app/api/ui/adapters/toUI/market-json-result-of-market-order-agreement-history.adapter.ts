import { ApiMarketJsonResultOfMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-market-order-agreement-history-dto';
import { MarketJsonResultOfMarketOrderAgreementHistory } from '../../models/market-json-result-of-market-order-agreement-history.interface';

export function adaptMarketJsonResultOfMarketOrderAgreementHistoryToUI(source?: ApiMarketJsonResultOfMarketOrderAgreementHistoryDto | null): MarketJsonResultOfMarketOrderAgreementHistory {
  return (source ?? {}) as MarketJsonResultOfMarketOrderAgreementHistory;
}
