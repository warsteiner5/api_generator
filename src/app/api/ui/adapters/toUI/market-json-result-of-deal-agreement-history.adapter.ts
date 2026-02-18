import { ApiMarketJsonResultOfDealAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-deal-agreement-history-dto';
import { MarketJsonResultOfDealAgreementHistory } from '../../models/market-json-result-of-deal-agreement-history.interface';

export function adaptMarketJsonResultOfDealAgreementHistoryToUI(source?: ApiMarketJsonResultOfDealAgreementHistoryDto | null): MarketJsonResultOfDealAgreementHistory {
  return (source ?? {}) as MarketJsonResultOfDealAgreementHistory;
}
