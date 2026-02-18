import { ApiTenantRoleEnum } from '../../../swagger/models/api-tenant-role-enum';
import { TenantRoleEnum } from '../../enums/tenant-role.enum';

export function adaptTenantRoleEnumToUI(source?: ApiTenantRoleEnum | null): TenantRoleEnum {
  switch (source) {
    case ApiTenantRoleEnum.None:
      return TenantRoleEnum.None;
    case ApiTenantRoleEnum.CustomerTenant:
      return TenantRoleEnum.CustomerTenant;
    case ApiTenantRoleEnum.ParticipantTenant:
      return TenantRoleEnum.ParticipantTenant;
    default:
      throw new Error(`Enum value is not defined: ApiTenantRoleEnum=${String(source)}`);
  }
}
