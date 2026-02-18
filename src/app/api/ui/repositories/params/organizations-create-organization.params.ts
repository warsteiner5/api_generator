import { CreateOrganizationByDictionaryService } from '../../models/create-organization-by-dictionary-service.interface';
import { OrganizationsCreateOrganization$Params } from '../../../swagger/fn/organizations/organizations-create-organization';
import { adaptApiCreateOrganizationByDictionaryServiceDto } from '../../adapters/toDto/api-create-organization-by-dictionary-service-dto.adapter';

export interface OrganizationsCreateOrganizationParams {
  body?: CreateOrganizationByDictionaryService;
}

export const organizationsCreateOrganizationParamsAdapter = {
  adapt(params?: OrganizationsCreateOrganizationParams): OrganizationsCreateOrganization$Params {
    if (!params) {
      return {} as OrganizationsCreateOrganization$Params;
    }
    return {
      body: adaptApiCreateOrganizationByDictionaryServiceDto(params.body),
    };
  }
};
