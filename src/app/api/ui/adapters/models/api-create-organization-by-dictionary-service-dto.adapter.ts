import { CreateOrganizationByDictionaryService } from '../../models/create-organization-by-dictionary-service.interface';
import { ApiCreateOrganizationByDictionaryServiceDto } from '../../../swagger/models/api-create-organization-by-dictionary-service-dto';
import { apiCreateOrganizationByDictionaryServiceManagerDtoAdapter } from './api-create-organization-by-dictionary-service-manager-dto.adapter';

export const apiCreateOrganizationByDictionaryServiceDtoAdapter = (source?: CreateOrganizationByDictionaryService | null): ApiCreateOrganizationByDictionaryServiceDto => {
  return {
    inn: source?.inn,
    kpp: source?.kpp,
    manager: source?.manager === null ? undefined : apiCreateOrganizationByDictionaryServiceManagerDtoAdapter(source?.manager),
  };
}
