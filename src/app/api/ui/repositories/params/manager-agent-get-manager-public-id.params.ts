import { ManagerAgentGetManagerPublicId$Params } from '../../../swagger/fn/manager-agent/manager-agent-get-manager-public-id';

export interface ManagerAgentGetManagerPublicIdParams {
}

export const managerAgentGetManagerPublicIdParamsAdapter = {
  adapt(params?: ManagerAgentGetManagerPublicIdParams): ManagerAgentGetManagerPublicId$Params {
    if (!params) {
      return {} as ManagerAgentGetManagerPublicId$Params;
    }
    return {
    };
  }
};
