import { ApiMetricDto } from '../../../swagger/models/api-metric-dto';
import { Metric } from '../../models/metric.interface';
import { adaptMetricObjectTypeAltEnumToUI } from './metric-object-type-alt-enum.adapter';
import { adaptMetricTypeAltEnumToUI } from './metric-type-alt-enum.adapter';

export function adaptMetricToUI(source?: ApiMetricDto | null): Metric {
  return {
    metricTypeId: adaptMetricTypeAltEnumToUI(source?.MetricTypeId),
    objectId: source?.ObjectId ?? '',
    objectTypeId: adaptMetricObjectTypeAltEnumToUI(source?.ObjectTypeId),
    objectValue: source?.ObjectValue ?? 0,
  };
}
