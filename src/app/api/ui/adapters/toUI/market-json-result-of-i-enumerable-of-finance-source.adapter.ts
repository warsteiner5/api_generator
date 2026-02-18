import { ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-finance-source-dto';
import { MarketJsonResultOfIEnumerableOfFinanceSource } from '../../models/market-json-result-of-i-enumerable-of-finance-source.interface';

export function adaptMarketJsonResultOfIEnumerableOfFinanceSourceToUI(source?: ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto | null): MarketJsonResultOfIEnumerableOfFinanceSource {
  return (source ?? {}) as MarketJsonResultOfIEnumerableOfFinanceSource;
}
