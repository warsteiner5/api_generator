import { MarketJsonResultOfDealAgreementHistory } from '../../models/market-json-result-of-deal-agreement-history.interface';
import { ApiMarketJsonResultOfDealAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-deal-agreement-history-dto';

export function adaptApiMarketJsonResultOfDealAgreementHistoryDto(source?: MarketJsonResultOfDealAgreementHistory | null): ApiMarketJsonResultOfDealAgreementHistoryDto {
  return (source ?? {}) as ApiMarketJsonResultOfDealAgreementHistoryDto;
}
