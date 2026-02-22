import { ExternalDealSupplier } from '../../models/external-deal-supplier.interface';
import { ApiExternalDealSupplierDto } from '../../../swagger/models/api-external-deal-supplier-dto';
import { apiBankInfoDtoAdapter } from './api-bank-info-dto.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiExternalDealSupplierDtoAdapter = (source?: ExternalDealSupplier | null): ApiExternalDealSupplierDto => {
  return {
    BankInfo: source?.bankInfo === null ? undefined : apiBankInfoDtoAdapter(source?.bankInfo),
    ContactEmail: source?.contactEmail,
    ContactFirstName: source?.contactFirstName,
    ContactLastName: source?.contactLastName,
    ContactMiddleName: source?.contactMiddleName,
    ContactPhoneNumber: source?.contactPhoneNumber,
    FullAddress: source?.fullAddress,
    Id: source?.id,
    Inn: source?.inn,
    IsSmp: source?.isSmp,
    Kpp: source?.kpp,
    Name: source?.name,
    Ogrn: source?.ogrn,
    OrganizationType: source?.organizationType === null ? undefined : apiOrganizationTypeEnumAdapter(source?.organizationType),
    ShortName: source?.shortName,
    WarningMessage: source?.warningMessage,
  };
}
