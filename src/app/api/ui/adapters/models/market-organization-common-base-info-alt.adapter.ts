import { ApiMarketOrganizationCommonBaseInfoAltDto } from '../../../swagger/models/api-market-organization-common-base-info';
import { MarketOrganizationCommonBaseInfoAlt } from '../../models/market-organization-common-base-info-alt.interface';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const marketOrganizationCommonBaseInfoAltAdapter = (source?: ApiMarketOrganizationCommonBaseInfoAltDto | null): MarketOrganizationCommonBaseInfoAlt => {
  return {
    country: source?.Country,
    directorFullName: source?.DirectorFullName,
    email: source?.Email,
    fullName: source?.FullName,
    inn: source?.Inn,
    isSmp: source?.IsSmp,
    kpp: source?.Kpp,
    ogrn: source?.Ogrn,
    ogrnip: source?.Ogrnip,
    phoneNumber: source?.PhoneNumber,
    shortName: source?.ShortName,
    type: source?.Type === null ? undefined : organizationTypeEnumAdapter(source?.Type),
    unp: source?.Unp,
  };
}
