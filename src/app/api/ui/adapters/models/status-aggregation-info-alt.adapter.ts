import { ApiStatusAggregationInfoAltDto } from '../../../swagger/models/api-status-aggregation-info';
import { StatusAggregationInfoAlt } from '../../models/status-aggregation-info-alt.interface';

export const statusAggregationInfoAltAdapter = (source?: ApiStatusAggregationInfoAltDto | null): StatusAggregationInfoAlt => {
  return {
    count: source?.Count,
    sum: source?.Sum,
  };
}
