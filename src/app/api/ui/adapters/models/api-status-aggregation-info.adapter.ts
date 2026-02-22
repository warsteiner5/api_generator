import { StatusAggregationInfoAlt } from '../../models/status-aggregation-info-alt.interface';
import { ApiStatusAggregationInfoAltDto } from '../../../swagger/models/api-status-aggregation-info';

export const apiStatusAggregationInfoAltDtoAdapter = (source?: StatusAggregationInfoAlt | null): ApiStatusAggregationInfoAltDto => {
  return {
    Count: source?.count,
    Sum: source?.sum,
  };
}
