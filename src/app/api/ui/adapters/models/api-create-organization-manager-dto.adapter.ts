import { CreateOrganizationManager } from '../../models/create-organization-manager.interface';
import { ApiCreateOrganizationManagerDto } from '../../../swagger/models/api-create-organization-manager-dto';

export const apiCreateOrganizationManagerDtoAdapter = (source?: CreateOrganizationManager | null): ApiCreateOrganizationManagerDto => {
  return {
    firstName: source?.firstName,
    lastName: source?.lastName,
    middleName: source?.middleName,
    position: source?.position,
  };
}
