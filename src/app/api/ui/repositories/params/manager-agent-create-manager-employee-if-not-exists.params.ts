import { ManagerAgentCreateManagerEmployeeIfNotExists$Params } from '../../../swagger/fn/manager-agent/manager-agent-create-manager-employee-if-not-exists';

// @ts-ignore
export interface ManagerAgentCreateManagerEmployeeIfNotExistsParams {
  organizationGuid: string;
}

export function managerAgentCreateManagerEmployeeIfNotExistsAdapter(params?: ManagerAgentCreateManagerEmployeeIfNotExistsParams): ManagerAgentCreateManagerEmployeeIfNotExists$Params {
  if (!params) {
    return {} as ManagerAgentCreateManagerEmployeeIfNotExists$Params;
  }
  return {
      organizationGuid: params.organizationGuid,
  };
}
