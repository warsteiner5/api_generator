import { ApiMetricDto } from '../../../swagger/models/api-metric-dto';
import { Metric } from '../../models/metric.interface';
import { metricObjectTypeAltEnumAdapter } from '../enums/metric-object-type-alt-enum.adapter';
import { metricTypeAltEnumAdapter } from '../enums/metric-type-alt-enum.adapter';

export const metricAdapter = (source?: ApiMetricDto | null): Metric => {
  return {
    metricTypeId: source?.MetricTypeId === null ? undefined : metricTypeAltEnumAdapter(source?.MetricTypeId),
    objectId: source?.ObjectId,
    objectTypeId: source?.ObjectTypeId === null ? undefined : metricObjectTypeAltEnumAdapter(source?.ObjectTypeId),
    objectValue: source?.ObjectValue,
  };
}
