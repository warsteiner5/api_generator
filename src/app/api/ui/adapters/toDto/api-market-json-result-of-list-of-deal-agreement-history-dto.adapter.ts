import { MarketJsonResultOfListOfDealAgreementHistory } from '../../models/market-json-result-of-list-of-deal-agreement-history.interface';
import { ApiMarketJsonResultOfListOfDealAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-deal-agreement-history-dto';

export function adaptApiMarketJsonResultOfListOfDealAgreementHistoryDto(source?: MarketJsonResultOfListOfDealAgreementHistory | null): ApiMarketJsonResultOfListOfDealAgreementHistoryDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfDealAgreementHistoryDto;
}
