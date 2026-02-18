import { StatusAggregationInfoAlt } from '../../models/status-aggregation-info-alt.interface';
import { ApiStatusAggregationInfoAltDto } from '../../../swagger/models/api-status-aggregation-info';

export function adaptApiStatusAggregationInfoAltDto(source?: StatusAggregationInfoAlt | null): ApiStatusAggregationInfoAltDto {
  return {
    Count: source?.count,
    Sum: source?.sum,
  };
}
