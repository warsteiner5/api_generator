import { ApiMarketOrganizationCommonBaseInfoAltDto } from '../../../swagger/models/api-market-organization-common-base-info';
import { MarketOrganizationCommonBaseInfoAlt } from '../../models/market-organization-common-base-info-alt.interface';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptMarketOrganizationCommonBaseInfoAltToUI(source?: ApiMarketOrganizationCommonBaseInfoAltDto | null): MarketOrganizationCommonBaseInfoAlt {
  return {
    country: source?.Country ?? '',
    directorFullName: source?.DirectorFullName ?? '',
    email: source?.Email ?? '',
    fullName: source?.FullName ?? '',
    inn: source?.Inn ?? '',
    isSmp: source?.IsSmp ?? false,
    kpp: source?.Kpp ?? '',
    ogrn: source?.Ogrn ?? '',
    ogrnip: source?.Ogrnip ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    shortName: source?.ShortName ?? '',
    type: adaptOrganizationTypeEnumToUI(source?.Type),
    unp: source?.Unp ?? '',
  };
}
