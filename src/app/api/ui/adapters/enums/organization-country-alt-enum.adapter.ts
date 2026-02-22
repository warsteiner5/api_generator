import { ApiOrganizationCountryAltEnum } from '../../../swagger/models/api-organization-country';
import { OrganizationCountryAltEnum } from '../../enums/organization-country-alt.enum';

export const organizationCountryAltEnumAdapter = (source?: ApiOrganizationCountryAltEnum | null): OrganizationCountryAltEnum => {
  switch (source) {
    case ApiOrganizationCountryAltEnum.Unknown:
      return OrganizationCountryAltEnum.Unknown;
    case ApiOrganizationCountryAltEnum.RussianFederation:
      return OrganizationCountryAltEnum.RussianFederation;
    case ApiOrganizationCountryAltEnum.Belarus:
      return OrganizationCountryAltEnum.Belarus;
    case ApiOrganizationCountryAltEnum.Kazakhstan:
      return OrganizationCountryAltEnum.Kazakhstan;
    case ApiOrganizationCountryAltEnum.Germany:
      return OrganizationCountryAltEnum.Germany;
    case ApiOrganizationCountryAltEnum.USA:
      return OrganizationCountryAltEnum.USA;
    default:
      throw new Error(`Enum value is not defined: ApiOrganizationCountryAltEnum=${String(source)}`);
  }
}
