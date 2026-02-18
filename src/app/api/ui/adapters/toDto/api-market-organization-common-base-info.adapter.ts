import { MarketOrganizationCommonBaseInfoAlt } from '../../models/market-organization-common-base-info-alt.interface';
import { ApiMarketOrganizationCommonBaseInfoAltDto } from '../../../swagger/models/api-market-organization-common-base-info';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiMarketOrganizationCommonBaseInfoAltDto(source?: MarketOrganizationCommonBaseInfoAlt | null): ApiMarketOrganizationCommonBaseInfoAltDto {
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
    Type: adaptApiOrganizationTypeEnum(source?.type),
    Unp: source?.unp,
  };
}
