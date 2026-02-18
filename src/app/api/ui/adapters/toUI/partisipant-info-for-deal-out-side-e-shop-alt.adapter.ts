import { ApiPartisipantInfoForDealOutSideEShopAltDto } from '../../../swagger/models/api-partisipant-info-for-deal-out-side-e-shop';
import { PartisipantInfoForDealOutSideEShopAlt } from '../../models/partisipant-info-for-deal-out-side-e-shop-alt.interface';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptPartisipantInfoForDealOutSideEShopAltToUI(source?: ApiPartisipantInfoForDealOutSideEShopAltDto | null): PartisipantInfoForDealOutSideEShopAlt {
  return {
    address: source?.Address ?? '',
    bankBik: source?.BankBik ?? '',
    bankCheckingAccount: source?.BankCheckingAccount ?? '',
    bankCorrespondentAccount: source?.BankCorrespondentAccount ?? '',
    bankName: source?.BankName ?? '',
    bankPersonalAccount: source?.BankPersonalAccount ?? '',
    email: source?.Email ?? '',
    firstName: source?.FirstName ?? '',
    fullName: source?.FullName ?? '',
    inn: source?.Inn ?? '',
    isSMP: source?.IsSMP ?? false,
    kpp: source?.Kpp ?? '',
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
    ogrn: source?.Ogrn ?? '',
    ogrnip: source?.Ogrnip ?? '',
    organizationType: adaptOrganizationTypeEnumToUI(source?.OrganizationType),
    phone: source?.Phone ?? '',
    shortName: source?.ShortName ?? '',
    snils: source?.Snils ?? '',
    warningMessage: source?.WarningMessage ?? '',
  };
}
