import { PartisipantInfoForDealOutSideEShopAlt } from '../../models/partisipant-info-for-deal-out-side-e-shop-alt.interface';
import { ApiPartisipantInfoForDealOutSideEShopAltDto } from '../../../swagger/models/api-partisipant-info-for-deal-out-side-e-shop';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiPartisipantInfoForDealOutSideEShopAltDtoAdapter = (source?: PartisipantInfoForDealOutSideEShopAlt | null): ApiPartisipantInfoForDealOutSideEShopAltDto => {
  return {
    Address: source?.address,
    BankBik: source?.bankBik,
    BankCheckingAccount: source?.bankCheckingAccount,
    BankCorrespondentAccount: source?.bankCorrespondentAccount,
    BankName: source?.bankName,
    BankPersonalAccount: source?.bankPersonalAccount,
    Email: source?.email,
    FirstName: source?.firstName,
    FullName: source?.fullName,
    Inn: source?.inn,
    IsSMP: source?.isSMP,
    Kpp: source?.kpp,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    Ogrn: source?.ogrn,
    Ogrnip: source?.ogrnip,
    OrganizationType: source?.organizationType === null ? undefined : apiOrganizationTypeEnumAdapter(source?.organizationType),
    Phone: source?.phone,
    ShortName: source?.shortName,
    Snils: source?.snils,
    WarningMessage: source?.warningMessage,
  };
}
