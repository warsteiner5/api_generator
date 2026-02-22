import { ApiCreateOrganizationManagerDto } from '../../../swagger/models/api-create-organization-manager-dto';
import { CreateOrganizationManager } from '../../models/create-organization-manager.interface';

export const createOrganizationManagerAdapter = (source?: ApiCreateOrganizationManagerDto | null): CreateOrganizationManager => {
  return {
    firstName: source?.firstName,
    lastName: source?.lastName,
    middleName: source?.middleName,
    position: source?.position,
  };
}
