import { ManagerAgentAttachOrganisation$Params } from '../../../swagger/fn/manager-agent/manager-agent-attach-organisation';

export interface ManagerAgentAttachOrganisationParams {
  organizationGuid: string;
}

export const managerAgentAttachOrganisationParamsAdapter = {
  adapt(params?: ManagerAgentAttachOrganisationParams): ManagerAgentAttachOrganisation$Params {
    if (!params) {
      return {} as ManagerAgentAttachOrganisation$Params;
    }
    return {
      organizationGuid: params.organizationGuid,
    };
  }
};
