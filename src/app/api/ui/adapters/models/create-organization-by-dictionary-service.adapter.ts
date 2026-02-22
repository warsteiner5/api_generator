import { ApiCreateOrganizationByDictionaryServiceDto } from '../../../swagger/models/api-create-organization-by-dictionary-service-dto';
import { CreateOrganizationByDictionaryService } from '../../models/create-organization-by-dictionary-service.interface';
import { createOrganizationByDictionaryServiceManagerAdapter } from './create-organization-by-dictionary-service-manager.adapter';

export const createOrganizationByDictionaryServiceAdapter = (source?: ApiCreateOrganizationByDictionaryServiceDto | null): CreateOrganizationByDictionaryService => {
  return {
    inn: source?.inn,
    kpp: source?.kpp,
    manager: source?.manager === null ? undefined : createOrganizationByDictionaryServiceManagerAdapter(source?.manager),
  };
}
