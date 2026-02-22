import { ApiMetricDetailsRequestAltDto } from '../../../swagger/models/api-metric-details-request';
import { MetricDetailsRequestAlt } from '../../models/metric-details-request-alt.interface';
import { metricTypeAltEnumAdapter } from '../enums/metric-type-alt-enum.adapter';

export const metricDetailsRequestAltAdapter = (source?: ApiMetricDetailsRequestAltDto | null): MetricDetailsRequestAlt => {
  return {
    metricType: source?.MetricType === null ? undefined : metricTypeAltEnumAdapter(source?.MetricType),
    objectId: source?.ObjectId,
    page: source?.Page,
    pageSize: source?.PageSize,
  };
}
