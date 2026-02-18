import { ManagerAgentCreateManagerEmployeeIfNotExists$Params } from '../../../swagger/fn/manager-agent/manager-agent-create-manager-employee-if-not-exists';

export interface ManagerAgentCreateManagerEmployeeIfNotExistsParams {
  organizationGuid: string;
}

export const managerAgentCreateManagerEmployeeIfNotExistsParamsAdapter = {
  adapt(params?: ManagerAgentCreateManagerEmployeeIfNotExistsParams): ManagerAgentCreateManagerEmployeeIfNotExists$Params {
    if (!params) {
      return {} as ManagerAgentCreateManagerEmployeeIfNotExists$Params;
    }
    return {
      organizationGuid: params.organizationGuid,
    };
  }
};
