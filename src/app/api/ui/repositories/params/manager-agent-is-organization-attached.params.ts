import { ManagerAgentIsOrganizationAttached$Params } from '../../../swagger/fn/manager-agent/manager-agent-is-organization-attached';

// @ts-ignore
export interface ManagerAgentIsOrganizationAttachedParams {
  organizationGuid: string;
}

export function managerAgentIsOrganizationAttachedAdapter(params?: ManagerAgentIsOrganizationAttachedParams): ManagerAgentIsOrganizationAttached$Params {
  if (!params) {
    return {} as ManagerAgentIsOrganizationAttached$Params;
  }
  return {
      organizationGuid: params.organizationGuid,
  };
}
