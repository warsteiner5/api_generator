import { ExportByUsersGetUserCounters$Params } from '../../../swagger/fn/export-by-users/export-by-users-get-user-counters';

export interface ExportByUsersGetUserCountersParams {
}

export const exportByUsersGetUserCountersParamsAdapter = {
  adapt(params?: ExportByUsersGetUserCountersParams): ExportByUsersGetUserCounters$Params {
    if (!params) {
      return {} as ExportByUsersGetUserCounters$Params;
    }
    return {
    };
  }
};
