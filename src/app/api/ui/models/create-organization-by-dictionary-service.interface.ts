import { CreateOrganizationByDictionaryServiceManager } from './create-organization-by-dictionary-service-manager.interface';

// @ts-ignore
export interface CreateOrganizationByDictionaryService {
  inn: string;
  kpp: string;
  manager: CreateOrganizationByDictionaryServiceManager;
}
