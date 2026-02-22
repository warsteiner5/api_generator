import { ManagerAgentAttachOrganisation$Params } from '../../../swagger/fn/manager-agent/manager-agent-attach-organisation';

// @ts-ignore
export interface ManagerAgentAttachOrganisationParams {
  organizationGuid: string;
}

export function managerAgentAttachOrganisationAdapter(params?: ManagerAgentAttachOrganisationParams): ManagerAgentAttachOrganisation$Params {
  if (!params) {
    return {} as ManagerAgentAttachOrganisation$Params;
  }
  return {
      organizationGuid: params.organizationGuid,
  };
}
