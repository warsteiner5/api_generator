import { ApiExternalDealSupplierDto } from '../../../swagger/models/api-external-deal-supplier-dto';
import { ExternalDealSupplier } from '../../models/external-deal-supplier.interface';
import { adaptBankInfoToUI } from './bank-info.adapter';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptExternalDealSupplierToUI(source?: ApiExternalDealSupplierDto | null): ExternalDealSupplier {
  return {
    bankInfo: adaptBankInfoToUI(source?.BankInfo),
    contactEmail: source?.ContactEmail ?? '',
    contactFirstName: source?.ContactFirstName ?? '',
    contactLastName: source?.ContactLastName ?? '',
    contactMiddleName: source?.ContactMiddleName ?? '',
    contactPhoneNumber: source?.ContactPhoneNumber ?? '',
    fullAddress: source?.FullAddress ?? '',
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    isSmp: source?.IsSmp ?? false,
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    ogrn: source?.Ogrn ?? '',
    organizationType: adaptOrganizationTypeEnumToUI(source?.OrganizationType),
    shortName: source?.ShortName ?? '',
    warningMessage: source?.WarningMessage ?? '',
  };
}
