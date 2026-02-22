import { MarketOrganizationCommonBaseInfoAlt } from '../../models/market-organization-common-base-info-alt.interface';
import { ApiMarketOrganizationCommonBaseInfoAltDto } from '../../../swagger/models/api-market-organization-common-base-info';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiMarketOrganizationCommonBaseInfoAltDtoAdapter = (source?: MarketOrganizationCommonBaseInfoAlt | null): ApiMarketOrganizationCommonBaseInfoAltDto => {
  return {
    Country: source?.country,
    DirectorFullName: source?.directorFullName,
    Email: source?.email,
    FullName: source?.fullName,
    Inn: source?.inn,
    IsSmp: source?.isSmp,
    Kpp: source?.kpp,
    Ogrn: source?.ogrn,
    Ogrnip: source?.ogrnip,
    PhoneNumber: source?.phoneNumber,
    ShortName: source?.shortName,
    Type: source?.type === null ? undefined : apiOrganizationTypeEnumAdapter(source?.type),
    Unp: source?.unp,
  };
}
