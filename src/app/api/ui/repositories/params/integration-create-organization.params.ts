import { CreateOrganization } from '../../models/create-organization.interface';
import { IntegrationCreateOrganization$Params } from '../../../swagger/fn/integration/integration-create-organization';
import { apiCreateOrganizationDtoAdapter } from '../../adapters/models/api-create-organization-dto.adapter';

// @ts-ignore
export interface IntegrationCreateOrganizationParams {
  body?: CreateOrganization;
}

export function integrationCreateOrganizationAdapter(params?: IntegrationCreateOrganizationParams): IntegrationCreateOrganization$Params {
  if (!params) {
    return {} as IntegrationCreateOrganization$Params;
  }
  return {
      body: apiCreateOrganizationDtoAdapter(params.body),
  };
}
