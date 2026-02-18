import { ApiMetricDetailDto } from '../../../swagger/models/api-metric-detail-dto';
import { MetricDetail } from '../../models/metric-detail.interface';

export function adaptMetricDetailToUI(source?: ApiMetricDetailDto | null): MetricDetail {
  return {
    actionCount: source?.ActionCount ?? 0,
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    kpp: source?.Kpp ?? '',
    metricId: source?.MetricId ?? 0,
    metricTypeId: source?.MetricTypeId ?? 0,
    name: source?.Name ?? '',
    objectId: source?.ObjectId ?? '',
    objectTypeId: source?.ObjectTypeId ?? 0,
    organizationId: source?.OrganizationId ?? 0,
  };
}
