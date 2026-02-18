import { CreateOrganizationManager } from '../../models/create-organization-manager.interface';
import { ApiCreateOrganizationManagerDto } from '../../../swagger/models/api-create-organization-manager-dto';

export function adaptApiCreateOrganizationManagerDto(source?: CreateOrganizationManager | null): ApiCreateOrganizationManagerDto {
  return {
    firstName: source?.firstName,
    lastName: source?.lastName,
    middleName: source?.middleName,
    position: source?.position,
  };
}
