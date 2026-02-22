import { ApiExternalDealSupplierDto } from '../../../swagger/models/api-external-deal-supplier-dto';
import { ExternalDealSupplier } from '../../models/external-deal-supplier.interface';
import { bankInfoAdapter } from './bank-info.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const externalDealSupplierAdapter = (source?: ApiExternalDealSupplierDto | null): ExternalDealSupplier => {
  return {
    bankInfo: source?.BankInfo === null ? undefined : bankInfoAdapter(source?.BankInfo),
    contactEmail: source?.ContactEmail,
    contactFirstName: source?.ContactFirstName,
    contactLastName: source?.ContactLastName,
    contactMiddleName: source?.ContactMiddleName,
    contactPhoneNumber: source?.ContactPhoneNumber,
    fullAddress: source?.FullAddress,
    id: source?.Id,
    inn: source?.Inn,
    isSmp: source?.IsSmp,
    kpp: source?.Kpp,
    name: source?.Name,
    ogrn: source?.Ogrn,
    organizationType: source?.OrganizationType === null ? undefined : organizationTypeEnumAdapter(source?.OrganizationType),
    shortName: source?.ShortName,
    warningMessage: source?.WarningMessage,
  };
}
