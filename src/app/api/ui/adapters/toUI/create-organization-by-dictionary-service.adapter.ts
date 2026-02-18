import { ApiCreateOrganizationByDictionaryServiceDto } from '../../../swagger/models/api-create-organization-by-dictionary-service-dto';
import { CreateOrganizationByDictionaryService } from '../../models/create-organization-by-dictionary-service.interface';
import { adaptCreateOrganizationByDictionaryServiceManagerToUI } from './create-organization-by-dictionary-service-manager.adapter';

export function adaptCreateOrganizationByDictionaryServiceToUI(source?: ApiCreateOrganizationByDictionaryServiceDto | null): CreateOrganizationByDictionaryService {
  return {
    inn: source?.inn ?? '',
    kpp: source?.kpp ?? '',
    manager: adaptCreateOrganizationByDictionaryServiceManagerToUI(source?.manager),
  };
}
