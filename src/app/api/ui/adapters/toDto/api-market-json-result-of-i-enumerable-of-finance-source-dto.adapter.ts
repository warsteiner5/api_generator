import { MarketJsonResultOfIEnumerableOfFinanceSource } from '../../models/market-json-result-of-i-enumerable-of-finance-source.interface';
import { ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-finance-source-dto';

export function adaptApiMarketJsonResultOfIEnumerableOfFinanceSourceDto(source?: MarketJsonResultOfIEnumerableOfFinanceSource | null): ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto {
  return (source ?? {}) as ApiMarketJsonResultOfIEnumerableOfFinanceSourceDto;
}
