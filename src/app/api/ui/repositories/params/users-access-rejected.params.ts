import { UsersAccessRejected$Params } from '../../../swagger/fn/users/users-access-rejected';

// @ts-ignore
export interface UsersAccessRejectedParams {
  regulationType: number;
}

export function usersAccessRejectedAdapter(params?: UsersAccessRejectedParams): UsersAccessRejected$Params {
  if (!params) {
    return {} as UsersAccessRejected$Params;
  }
  return {
      regulationType: params.regulationType,
  };
}
