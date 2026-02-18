import { CreateOrganizationByDictionaryService } from '../../models/create-organization-by-dictionary-service.interface';
import { ApiCreateOrganizationByDictionaryServiceDto } from '../../../swagger/models/api-create-organization-by-dictionary-service-dto';
import { adaptApiCreateOrganizationByDictionaryServiceManagerDto } from './api-create-organization-by-dictionary-service-manager-dto.adapter';

export function adaptApiCreateOrganizationByDictionaryServiceDto(source?: CreateOrganizationByDictionaryService | null): ApiCreateOrganizationByDictionaryServiceDto {
  return {
    inn: source?.inn,
    kpp: source?.kpp,
    manager: adaptApiCreateOrganizationByDictionaryServiceManagerDto(source?.manager),
  };
}
