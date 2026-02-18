import { ApiCanLeaveFeebackRequestDto } from '../../../swagger/models/api-can-leave-feeback-request-dto';
import { CanLeaveFeebackRequest } from '../../models/can-leave-feeback-request.interface';

export function adaptCanLeaveFeebackRequestToUI(source?: ApiCanLeaveFeebackRequestDto | null): CanLeaveFeebackRequest {
  return {
    sourceOrgId: source?.SourceOrgId ?? 0,
    targetOrgId: source?.TargetOrgId ?? 0,
    tenantId: source?.TenantId ?? 0,
  };
}
