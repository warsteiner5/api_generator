import { MarketJsonResultOfIEnumerableOfMetric } from '../../models/market-json-result-of-i-enumerable-of-metric.interface';
import { ApiMarketJsonResultOfIEnumerableOfMetricDto } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-metric-dto';

export function adaptApiMarketJsonResultOfIEnumerableOfMetricDto(source?: MarketJsonResultOfIEnumerableOfMetric | null): ApiMarketJsonResultOfIEnumerableOfMetricDto {
  return (source ?? {}) as ApiMarketJsonResultOfIEnumerableOfMetricDto;
}
