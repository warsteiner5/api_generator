import { ApiCanLeaveFeebackRequestDto } from '../../../swagger/models/api-can-leave-feeback-request-dto';
import { CanLeaveFeebackRequest } from '../../models/can-leave-feeback-request.interface';

export const canLeaveFeebackRequestAdapter = (source?: ApiCanLeaveFeebackRequestDto | null): CanLeaveFeebackRequest => {
  return {
    sourceOrgId: source?.SourceOrgId,
    targetOrgId: source?.TargetOrgId,
    tenantId: source?.TenantId,
  };
}
