import { CanLeaveFeebackRequest } from '../../models/can-leave-feeback-request.interface';
import { ApiCanLeaveFeebackRequestDto } from '../../../swagger/models/api-can-leave-feeback-request-dto';

export function adaptApiCanLeaveFeebackRequestDto(source?: CanLeaveFeebackRequest | null): ApiCanLeaveFeebackRequestDto {
  return {
    SourceOrgId: source?.sourceOrgId,
    TargetOrgId: source?.targetOrgId,
    TenantId: source?.tenantId,
  };
}
