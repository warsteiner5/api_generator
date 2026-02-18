import { CreateOrganization } from '../../models/create-organization.interface';
import { IntegrationCreateOrganization$Params } from '../../../swagger/fn/integration/integration-create-organization';
import { adaptApiCreateOrganizationDto } from '../../adapters/toDto/api-create-organization-dto.adapter';

export interface IntegrationCreateOrganizationParams {
  body?: CreateOrganization;
}

export const integrationCreateOrganizationParamsAdapter = {
  adapt(params?: IntegrationCreateOrganizationParams): IntegrationCreateOrganization$Params {
    if (!params) {
      return {} as IntegrationCreateOrganization$Params;
    }
    return {
      body: adaptApiCreateOrganizationDto(params.body),
    };
  }
};
