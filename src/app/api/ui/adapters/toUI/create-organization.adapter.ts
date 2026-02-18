import { ApiCreateOrganizationDto } from '../../../swagger/models/api-create-organization-dto';
import { CreateOrganization } from '../../models/create-organization.interface';
import { adaptCreateOrganizationManagerToUI } from './create-organization-manager.adapter';
import { adaptOrganizationTypeEnumToUI } from './organization-type-enum.adapter';

export function adaptCreateOrganizationToUI(source?: ApiCreateOrganizationDto | null): CreateOrganization {
  return {
    address: source?.address ?? '',
    contactPerson: source?.contactPerson ?? '',
    director: source?.director ?? '',
    email: source?.email ?? '',
    fullName: source?.fullName ?? '',
    inn: source?.inn ?? '',
    kpp: source?.kpp ?? '',
    manager: adaptCreateOrganizationManagerToUI(source?.manager),
    name: source?.name ?? '',
    ogrn: source?.ogrn ?? '',
    organizationType: adaptOrganizationTypeEnumToUI(source?.organizationType),
    phone: source?.phone ?? '',
    site: source?.site ?? '',
    sourceType: source?.sourceType ?? 0,
  };
}
