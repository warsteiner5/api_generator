import { MetricValuesRequestAlt } from '../../models/metric-values-request-alt.interface';
import { ApiMetricValuesRequestAltDto } from '../../../swagger/models/api-metric-values-request';
import { adaptApiMetricObjectTypeAltEnum } from './api-metric-object-type.adapter';
import { adaptApiMetricTypeAltEnum } from './api-metric-type.adapter';

export function adaptApiMetricValuesRequestAltDto(source?: MetricValuesRequestAlt | null): ApiMetricValuesRequestAltDto {
  return {
    MetricObjectType: adaptApiMetricObjectTypeAltEnum(source?.metricObjectType),
    MetricType: adaptApiMetricTypeAltEnum(source?.metricType),
    ObjectIds: source?.objectIds ?? [],
  };
}
