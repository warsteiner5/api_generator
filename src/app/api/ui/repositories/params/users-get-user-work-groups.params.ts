import { UsersGetUserWorkGroups$Params } from '../../../swagger/fn/users/users-get-user-work-groups';

export interface UsersGetUserWorkGroupsParams {
}

export const usersGetUserWorkGroupsParamsAdapter = {
  adapt(params?: UsersGetUserWorkGroupsParams): UsersGetUserWorkGroups$Params {
    if (!params) {
      return {} as UsersGetUserWorkGroups$Params;
    }
    return {
    };
  }
};
