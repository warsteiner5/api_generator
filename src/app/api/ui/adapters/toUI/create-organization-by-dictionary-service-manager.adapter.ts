import { ApiCreateOrganizationByDictionaryServiceManagerDto } from '../../../swagger/models/api-create-organization-by-dictionary-service-manager-dto';
import { CreateOrganizationByDictionaryServiceManager } from '../../models/create-organization-by-dictionary-service-manager.interface';

export function adaptCreateOrganizationByDictionaryServiceManagerToUI(source?: ApiCreateOrganizationByDictionaryServiceManagerDto | null): CreateOrganizationByDictionaryServiceManager {
  return {
    email: source?.email ?? '',
    firstName: source?.firstName ?? '',
    lastName: source?.lastName ?? '',
    patronymic: source?.patronymic ?? '',
    phone: source?.phone ?? '',
    post: source?.post ?? '',
  };
}
