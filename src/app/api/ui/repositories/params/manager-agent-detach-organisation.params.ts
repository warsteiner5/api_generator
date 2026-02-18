import { ManagerAgentDetachOrganisation$Params } from '../../../swagger/fn/manager-agent/manager-agent-detach-organisation';

export interface ManagerAgentDetachOrganisationParams {
  organizationGuid: string;
}

export const managerAgentDetachOrganisationParamsAdapter = {
  adapt(params?: ManagerAgentDetachOrganisationParams): ManagerAgentDetachOrganisation$Params {
    if (!params) {
      return {} as ManagerAgentDetachOrganisation$Params;
    }
    return {
      organizationGuid: params.organizationGuid,
    };
  }
};
