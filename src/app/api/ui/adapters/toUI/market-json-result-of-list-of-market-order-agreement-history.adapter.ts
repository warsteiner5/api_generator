import { ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-order-agreement-history-dto';
import { MarketJsonResultOfListOfMarketOrderAgreementHistory } from '../../models/market-json-result-of-list-of-market-order-agreement-history.interface';

export function adaptMarketJsonResultOfListOfMarketOrderAgreementHistoryToUI(source?: ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto | null): MarketJsonResultOfListOfMarketOrderAgreementHistory {
  return (source ?? {}) as MarketJsonResultOfListOfMarketOrderAgreementHistory;
}
