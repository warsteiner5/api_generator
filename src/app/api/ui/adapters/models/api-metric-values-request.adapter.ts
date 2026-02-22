import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { ApiMetricValuesRequestAltDto } from '../../../swagger/models/api-metric-values-request';
import { apiMetricObjectTypeAltEnumAdapter } from '../enums/api-metric-object-type.adapter';
import { apiMetricTypeAltEnumAdapter } from '../enums/api-metric-type.adapter';

export const apiMetricValuesRequestAltDtoAdapter = (source?: MetricValuesRequestAlt | null): ApiMetricValuesRequestAltDto => {
  return {
    MetricObjectType: source?.metricObjectType === null ? undefined : apiMetricObjectTypeAltEnumAdapter(source?.metricObjectType),
    MetricType: source?.metricType === null ? undefined : apiMetricTypeAltEnumAdapter(source?.metricType),
    ObjectIds: source?.objectIds,
  };
}
