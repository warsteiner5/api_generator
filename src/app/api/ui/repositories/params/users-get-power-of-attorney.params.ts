import { UsersGetPowerOfAttorney$Params } from '../../../swagger/fn/users/users-get-power-of-attorney';

export interface UsersGetPowerOfAttorneyParams {
  fileId: string;
  id: string;
}

export const usersGetPowerOfAttorneyParamsAdapter = {
  adapt(params?: UsersGetPowerOfAttorneyParams): UsersGetPowerOfAttorney$Params {
    if (!params) {
      return {} as UsersGetPowerOfAttorney$Params;
    }
    return {
      fileId: params.fileId,
      id: params.id,
    };
  }
};
