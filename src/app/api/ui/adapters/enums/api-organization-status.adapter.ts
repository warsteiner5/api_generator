import { OrganizationStatusAltEnum } from '../../enums/organization-status-alt.enum';
import { ApiOrganizationStatusAltEnum } from '../../../swagger/models/api-organization-status';

export const apiOrganizationStatusAltEnumAdapter = (source?: OrganizationStatusAltEnum | null): ApiOrganizationStatusAltEnum => {
  switch (source) {
    case OrganizationStatusAltEnum.Unknown:
      return ApiOrganizationStatusAltEnum.Unknown;
    case OrganizationStatusAltEnum.Registering:
      return ApiOrganizationStatusAltEnum.Registering;
    case OrganizationStatusAltEnum.Active:
      return ApiOrganizationStatusAltEnum.Active;
    case OrganizationStatusAltEnum.Blocked:
      return ApiOrganizationStatusAltEnum.Blocked;
    default:
      throw new Error(`Enum value is not defined: OrganizationStatusAltEnum=${String(source)}`);
  }
}
