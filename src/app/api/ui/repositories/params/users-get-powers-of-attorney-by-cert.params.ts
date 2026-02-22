import { GetPowerOfAttorney } from '../../models/get-power-of-attorney.interface';
import { UsersGetPowersOfAttorneyByCert$Params } from '../../../swagger/fn/users/users-get-powers-of-attorney-by-cert';
import { apiGetPowerOfAttorneyDtoAdapter } from '../../adapters/models/api-get-power-of-attorney-dto.adapter';

// @ts-ignore
export interface UsersGetPowersOfAttorneyByCertParams {
  body?: GetPowerOfAttorney;
}

export function usersGetPowersOfAttorneyByCertAdapter(params?: UsersGetPowersOfAttorneyByCertParams): UsersGetPowersOfAttorneyByCert$Params {
  if (!params) {
    return {} as UsersGetPowersOfAttorneyByCert$Params;
  }
  return {
      body: apiGetPowerOfAttorneyDtoAdapter(params.body),
  };
}
