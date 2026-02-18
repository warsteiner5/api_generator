import { ApiStatusAggregationInfoAltDto } from '../../../swagger/models/api-status-aggregation-info';
import { StatusAggregationInfoAlt } from '../../models/status-aggregation-info-alt.interface';

export function adaptStatusAggregationInfoAltToUI(source?: ApiStatusAggregationInfoAltDto | null): StatusAggregationInfoAlt {
  return {
    count: source?.Count ?? 0,
    sum: source?.Sum ?? 0,
  };
}
