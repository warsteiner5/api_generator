import { ManagerAgentIsOrganizationAttached$Params } from '../../../swagger/fn/manager-agent/manager-agent-is-organization-attached';

export interface ManagerAgentIsOrganizationAttachedParams {
  organizationGuid: string;
}

export const managerAgentIsOrganizationAttachedParamsAdapter = {
  adapt(params?: ManagerAgentIsOrganizationAttachedParams): ManagerAgentIsOrganizationAttached$Params {
    if (!params) {
      return {} as ManagerAgentIsOrganizationAttached$Params;
    }
    return {
      organizationGuid: params.organizationGuid,
    };
  }
};
