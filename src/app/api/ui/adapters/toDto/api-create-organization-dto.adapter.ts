import { CreateOrganization } from '../../models/create-organization.interface';
import { ApiCreateOrganizationDto } from '../../../swagger/models/api-create-organization-dto';
import { adaptApiCreateOrganizationManagerDto } from './api-create-organization-manager-dto.adapter';
import { adaptApiOrganizationTypeEnum } from './api-organization-type-enum.adapter';

export function adaptApiCreateOrganizationDto(source?: CreateOrganization | null): ApiCreateOrganizationDto {
  return {
    address: source?.address,
    contactPerson: source?.contactPerson,
    director: source?.director,
    email: source?.email,
    fullName: source?.fullName,
    inn: source?.inn,
    kpp: source?.kpp,
    manager: adaptApiCreateOrganizationManagerDto(source?.manager),
    name: source?.name,
    ogrn: source?.ogrn,
    organizationType: adaptApiOrganizationTypeEnum(source?.organizationType),
    phone: source?.phone,
    site: source?.site,
    sourceType: source?.sourceType,
  };
}
