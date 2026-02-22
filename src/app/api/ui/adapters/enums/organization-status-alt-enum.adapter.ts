import { ApiOrganizationStatusAltEnum } from '../../../swagger/models/api-organization-status';
import { OrganizationStatusAltEnum } from '../../enums/organization-status-alt.enum';

export const organizationStatusAltEnumAdapter = (source?: ApiOrganizationStatusAltEnum | null): OrganizationStatusAltEnum => {
  switch (source) {
    case ApiOrganizationStatusAltEnum.Unknown:
      return OrganizationStatusAltEnum.Unknown;
    case ApiOrganizationStatusAltEnum.Registering:
      return OrganizationStatusAltEnum.Registering;
    case ApiOrganizationStatusAltEnum.Active:
      return OrganizationStatusAltEnum.Active;
    case ApiOrganizationStatusAltEnum.Blocked:
      return OrganizationStatusAltEnum.Blocked;
    default:
      throw new Error(`Enum value is not defined: ApiOrganizationStatusAltEnum=${String(source)}`);
  }
}
