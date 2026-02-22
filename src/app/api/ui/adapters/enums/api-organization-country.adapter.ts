import { OrganizationCountryAltEnum } from '../../enums/organization-country-alt.enum';
import { ApiOrganizationCountryAltEnum } from '../../../swagger/models/api-organization-country';

export const apiOrganizationCountryAltEnumAdapter = (source?: OrganizationCountryAltEnum | null): ApiOrganizationCountryAltEnum => {
  switch (source) {
    case OrganizationCountryAltEnum.Unknown:
      return ApiOrganizationCountryAltEnum.Unknown;
    case OrganizationCountryAltEnum.RussianFederation:
      return ApiOrganizationCountryAltEnum.RussianFederation;
    case OrganizationCountryAltEnum.Belarus:
      return ApiOrganizationCountryAltEnum.Belarus;
    case OrganizationCountryAltEnum.Kazakhstan:
      return ApiOrganizationCountryAltEnum.Kazakhstan;
    case OrganizationCountryAltEnum.Germany:
      return ApiOrganizationCountryAltEnum.Germany;
    case OrganizationCountryAltEnum.USA:
      return ApiOrganizationCountryAltEnum.USA;
    default:
      throw new Error(`Enum value is not defined: OrganizationCountryAltEnum=${String(source)}`);
  }
}
