import { CreateOrganizationByDictionaryServiceManager } from '../../models/create-organization-by-dictionary-service-manager.interface';
import { ApiCreateOrganizationByDictionaryServiceManagerDto } from '../../../swagger/models/api-create-organization-by-dictionary-service-manager-dto';

export const apiCreateOrganizationByDictionaryServiceManagerDtoAdapter = (source?: CreateOrganizationByDictionaryServiceManager | null): ApiCreateOrganizationByDictionaryServiceManagerDto => {
  return {
    email: source?.email,
    firstName: source?.firstName,
    lastName: source?.lastName,
    patronymic: source?.patronymic,
    phone: source?.phone,
    post: source?.post,
  };
}
