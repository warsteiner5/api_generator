import { Metric } from '../../models/metric.interface';
import { ApiMetricDto } from '../../../swagger/models/api-metric-dto';
import { apiMetricObjectTypeAltEnumAdapter } from '../enums/api-metric-object-type.adapter';
import { apiMetricTypeAltEnumAdapter } from '../enums/api-metric-type.adapter';

export const apiMetricDtoAdapter = (source?: Metric | null): ApiMetricDto => {
  return {
    MetricTypeId: source?.metricTypeId === null ? undefined : apiMetricTypeAltEnumAdapter(source?.metricTypeId),
    ObjectId: source?.objectId,
    ObjectTypeId: source?.objectTypeId === null ? undefined : apiMetricObjectTypeAltEnumAdapter(source?.objectTypeId),
    ObjectValue: source?.objectValue,
  };
}
