import { Metric } from '../../models/metric.interface';
import { ApiMetricDto } from '../../../swagger/models/api-metric-dto';
import { adaptApiMetricObjectTypeAltEnum } from './api-metric-object-type.adapter';
import { adaptApiMetricTypeAltEnum } from './api-metric-type.adapter';

export function adaptApiMetricDto(source?: Metric | null): ApiMetricDto {
  return {
    MetricTypeId: adaptApiMetricTypeAltEnum(source?.metricTypeId),
    ObjectId: source?.objectId,
    ObjectTypeId: adaptApiMetricObjectTypeAltEnum(source?.objectTypeId),
    ObjectValue: source?.objectValue,
  };
}
