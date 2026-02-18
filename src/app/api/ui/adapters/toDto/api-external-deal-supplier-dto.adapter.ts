import { ExternalDealSupplier } from '../../models/external-deal-supplier.interface';
import { ApiExternalDealSupplierDto } from '../../../swagger/models/api-external-deal-supplier-dto';
import { adaptApiBankInfoDto } from './api-bank-info-dto.adapter';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiExternalDealSupplierDto(source?: ExternalDealSupplier | null): ApiExternalDealSupplierDto {
  return {
    BankInfo: adaptApiBankInfoDto(source?.bankInfo),
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
    OrganizationType: adaptApiOrganizationTypeEnum(source?.organizationType),
    ShortName: source?.shortName,
    WarningMessage: source?.warningMessage,
  };
}
