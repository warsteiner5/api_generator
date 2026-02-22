import { ApiCreateOrganizationDto } from '../../../swagger/models/api-create-organization-dto';
import { CreateOrganization } from '../../models/create-organization.interface';
import { createOrganizationManagerAdapter } from './create-organization-manager.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const createOrganizationAdapter = (source?: ApiCreateOrganizationDto | null): CreateOrganization => {
  return {
    address: source?.address,
    contactPerson: source?.contactPerson,
    director: source?.director,
    email: source?.email,
    fullName: source?.fullName,
    inn: source?.inn,
    kpp: source?.kpp,
    manager: source?.manager === null ? undefined : createOrganizationManagerAdapter(source?.manager),
    name: source?.name,
    ogrn: source?.ogrn,
    organizationType: source?.organizationType === null ? undefined : organizationTypeEnumAdapter(source?.organizationType),
    phone: source?.phone,
    site: source?.site,
    sourceType: source?.sourceType,
  };
}
