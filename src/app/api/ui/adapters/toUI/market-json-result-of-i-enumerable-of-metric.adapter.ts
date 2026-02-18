import { ApiMarketJsonResultOfIEnumerableOfMetricDto } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-metric-dto';
import { MarketJsonResultOfIEnumerableOfMetric } from '../../models/market-json-result-of-i-enumerable-of-metric.interface';

export function adaptMarketJsonResultOfIEnumerableOfMetricToUI(source?: ApiMarketJsonResultOfIEnumerableOfMetricDto | null): MarketJsonResultOfIEnumerableOfMetric {
  return (source ?? {}) as MarketJsonResultOfIEnumerableOfMetric;
}
