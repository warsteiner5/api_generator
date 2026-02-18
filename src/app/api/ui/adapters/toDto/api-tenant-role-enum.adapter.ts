import { TenantRoleEnum } from '../../enums/tenant-role.enum';
import { ApiTenantRoleEnum } from '../../../swagger/models/api-tenant-role-enum';

export function adaptApiTenantRoleEnum(source?: TenantRoleEnum | null): ApiTenantRoleEnum {
  switch (source) {
    case TenantRoleEnum.None:
      return ApiTenantRoleEnum.None;
    case TenantRoleEnum.CustomerTenant:
      return ApiTenantRoleEnum.CustomerTenant;
    case TenantRoleEnum.ParticipantTenant:
      return ApiTenantRoleEnum.ParticipantTenant;
    default:
      throw new Error(`Enum value is not defined: TenantRoleEnum=${String(source)}`);
  }
}
