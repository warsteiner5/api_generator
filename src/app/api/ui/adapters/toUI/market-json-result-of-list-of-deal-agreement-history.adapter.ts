import { ApiMarketJsonResultOfListOfDealAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-deal-agreement-history-dto';
import { MarketJsonResultOfListOfDealAgreementHistory } from '../../models/market-json-result-of-list-of-deal-agreement-history.interface';

export function adaptMarketJsonResultOfListOfDealAgreementHistoryToUI(source?: ApiMarketJsonResultOfListOfDealAgreementHistoryDto | null): MarketJsonResultOfListOfDealAgreementHistory {
  return (source ?? {}) as MarketJsonResultOfListOfDealAgreementHistory;
}
