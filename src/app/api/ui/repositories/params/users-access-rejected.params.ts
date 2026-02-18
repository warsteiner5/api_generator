import { UsersAccessRejected$Params } from '../../../swagger/fn/users/users-access-rejected';

export interface UsersAccessRejectedParams {
  regulationType: number;
}

export const usersAccessRejectedParamsAdapter = {
  adapt(params?: UsersAccessRejectedParams): UsersAccessRejected$Params {
    if (!params) {
      return {} as UsersAccessRejected$Params;
    }
    return {
      regulationType: params.regulationType,
    };
  }
};
