import { MetricDetail } from '../../models/metric-detail.interface';
import { ApiMetricDetailDto } from '../../../swagger/models/api-metric-detail-dto';

export function adaptApiMetricDetailDto(source?: MetricDetail | null): ApiMetricDetailDto {
  return {
    ActionCount: source?.actionCount,
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    MetricId: source?.metricId,
    MetricTypeId: source?.metricTypeId,
    Name: source?.name,
    ObjectId: source?.objectId,
    ObjectTypeId: source?.objectTypeId,
    OrganizationId: source?.organizationId,
  };
}
