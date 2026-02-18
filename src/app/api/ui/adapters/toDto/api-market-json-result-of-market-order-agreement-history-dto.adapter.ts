import { MarketJsonResultOfMarketOrderAgreementHistory } from '../../models/market-json-result-of-market-order-agreement-history.interface';
import { ApiMarketJsonResultOfMarketOrderAgreementHistoryDto } from '../../../swagger/models/api-market-json-result-of-market-order-agreement-history-dto';

export function adaptApiMarketJsonResultOfMarketOrderAgreementHistoryDto(source?: MarketJsonResultOfMarketOrderAgreementHistory | null): ApiMarketJsonResultOfMarketOrderAgreementHistoryDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketOrderAgreementHistoryDto;
}
