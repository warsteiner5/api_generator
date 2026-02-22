import { CreateOrganizationByDictionaryService } from '../../models/create-organization-by-dictionary-service.interface';
import { OrganizationsCreateOrganization$Params } from '../../../swagger/fn/organizations/organizations-create-organization';
import { apiCreateOrganizationByDictionaryServiceDtoAdapter } from '../../adapters/models/api-create-organization-by-dictionary-service-dto.adapter';

// @ts-ignore
export interface OrganizationsCreateOrganizationParams {
  body?: CreateOrganizationByDictionaryService;
}

export function organizationsCreateOrganizationAdapter(params?: OrganizationsCreateOrganizationParams): OrganizationsCreateOrganization$Params {
  if (!params) {
    return {} as OrganizationsCreateOrganization$Params;
  }
  return {
      body: apiCreateOrganizationByDictionaryServiceDtoAdapter(params.body),
  };
}
