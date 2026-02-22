import { UsersGetPowerOfAttorney$Params } from '../../../swagger/fn/users/users-get-power-of-attorney';

// @ts-ignore
export interface UsersGetPowerOfAttorneyParams {
  fileId: string;
  id: string;
}

export function usersGetPowerOfAttorneyAdapter(params?: UsersGetPowerOfAttorneyParams): UsersGetPowerOfAttorney$Params {
  if (!params) {
    return {} as UsersGetPowerOfAttorney$Params;
  }
  return {
      fileId: params.fileId,
      id: params.id,
  };
}
