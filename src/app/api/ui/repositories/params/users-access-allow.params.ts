import { UsersAccessAllow$Params } from '../../../swagger/fn/users/users-access-allow';

export interface UsersAccessAllowParams {
  regulationType: number;
}

export const usersAccessAllowParamsAdapter = {
  adapt(params?: UsersAccessAllowParams): UsersAccessAllow$Params {
    if (!params) {
      return {} as UsersAccessAllow$Params;
    }
    return {
      regulationType: params.regulationType,
    };
  }
};
