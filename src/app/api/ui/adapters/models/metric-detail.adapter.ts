import { ApiMetricDetailDto } from '../../../swagger/models/api-metric-detail-dto';
import { MetricDetail } from '../../models/metric-detail.interface';

export const metricDetailAdapter = (source?: ApiMetricDetailDto | null): MetricDetail => {
  return {
    actionCount: source?.ActionCount,
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    metricId: source?.MetricId,
    metricTypeId: source?.MetricTypeId,
    name: source?.Name,
    objectId: source?.ObjectId,
    objectTypeId: source?.ObjectTypeId,
    organizationId: source?.OrganizationId,
  };
}
