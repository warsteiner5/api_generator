import { ManagerAgentDetachOrganisation$Params } from '../../../swagger/fn/manager-agent/manager-agent-detach-organisation';

// @ts-ignore
export interface ManagerAgentDetachOrganisationParams {
  organizationGuid: string;
}

export function managerAgentDetachOrganisationAdapter(params?: ManagerAgentDetachOrganisationParams): ManagerAgentDetachOrganisation$Params {
  if (!params) {
    return {} as ManagerAgentDetachOrganisation$Params;
  }
  return {
      organizationGuid: params.organizationGuid,
  };
}
