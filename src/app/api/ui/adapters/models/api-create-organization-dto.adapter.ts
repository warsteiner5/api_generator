import { CreateOrganization } from '../../models/create-organization.interface';
import { ApiCreateOrganizationDto } from '../../../swagger/models/api-create-organization-dto';
import { apiCreateOrganizationManagerDtoAdapter } from './api-create-organization-manager-dto.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiCreateOrganizationDtoAdapter = (source?: CreateOrganization | null): ApiCreateOrganizationDto => {
  return {
    address: source?.address,
    contactPerson: source?.contactPerson,
    director: source?.director,
    email: source?.email,
    fullName: source?.fullName,
    inn: source?.inn,
    kpp: source?.kpp,
    manager: source?.manager === null ? undefined : apiCreateOrganizationManagerDtoAdapter(source?.manager),
    name: source?.name,
    ogrn: source?.ogrn,
    organizationType: source?.organizationType === null ? undefined : apiOrganizationTypeEnumAdapter(source?.organizationType),
    phone: source?.phone,
    site: source?.site,
    sourceType: source?.sourceType,
  };
}
