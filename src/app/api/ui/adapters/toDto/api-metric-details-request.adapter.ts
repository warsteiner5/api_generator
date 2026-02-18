import { MetricDetailsRequestAlt } from '../../models/metric-details-request-alt.interface';
import { ApiMetricDetailsRequestAltDto } from '../../../swagger/models/api-metric-details-request';
import { adaptApiMetricTypeAltEnum } from './api-metric-type.adapter';

export function adaptApiMetricDetailsRequestAltDto(source?: MetricDetailsRequestAlt | null): ApiMetricDetailsRequestAltDto {
  return {
    MetricType: adaptApiMetricTypeAltEnum(source?.metricType),
    ObjectId: source?.objectId,
    Page: source?.page,
    PageSize: source?.pageSize,
  };
}
