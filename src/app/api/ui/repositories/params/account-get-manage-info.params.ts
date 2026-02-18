import { AccountGetManageInfo$Params } from '../../../swagger/fn/account/account-get-manage-info';

export interface AccountGetManageInfoParams {
}

export const accountGetManageInfoParamsAdapter = {
  adapt(params?: AccountGetManageInfoParams): AccountGetManageInfo$Params {
    if (!params) {
      return {} as AccountGetManageInfo$Params;
    }
    return {
    };
  }
};
