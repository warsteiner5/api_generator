import { MetricDetailsRequestAlt } from '../../models/metric-details-request-alt.interface';
import { ApiMetricDetailsRequestAltDto } from '../../../swagger/models/api-metric-details-request';
import { apiMetricTypeAltEnumAdapter } from '../enums/api-metric-type.adapter';

export const apiMetricDetailsRequestAltDtoAdapter = (source?: MetricDetailsRequestAlt | null): ApiMetricDetailsRequestAltDto => {
  return {
    MetricType: source?.metricType === null ? undefined : apiMetricTypeAltEnumAdapter(source?.metricType),
    ObjectId: source?.objectId,
    Page: source?.page,
    PageSize: source?.pageSize,
  };
}
