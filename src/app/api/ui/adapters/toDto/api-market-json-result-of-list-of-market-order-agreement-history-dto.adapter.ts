import { MarketJsonResultOfListOfMarketOrderAgreementHistory } from '../../models/market-json-result-of-list-of-market-order-agreement-history.interface';
import { ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-order-agreement-history-dto';

export function adaptApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto(source?: MarketJsonResultOfListOfMarketOrderAgreementHistory | null): ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto;
}
