import { UsersAccessAllow$Params } from '../../../swagger/fn/users/users-access-allow';

// @ts-ignore
export interface UsersAccessAllowParams {
  regulationType: number;
}

export function usersAccessAllowAdapter(params?: UsersAccessAllowParams): UsersAccessAllow$Params {
  if (!params) {
    return {} as UsersAccessAllow$Params;
  }
  return {
      regulationType: params.regulationType,
  };
}
