import { GetPowerOfAttorney } from '../../models/get-power-of-attorney.interface';
import { UsersGetPowersOfAttorneyByCert$Params } from '../../../swagger/fn/users/users-get-powers-of-attorney-by-cert';
import { adaptApiGetPowerOfAttorneyDto } from '../../adapters/toDto/api-get-power-of-attorney-dto.adapter';

export interface UsersGetPowersOfAttorneyByCertParams {
  body?: GetPowerOfAttorney;
}

export const usersGetPowersOfAttorneyByCertParamsAdapter = {
  adapt(params?: UsersGetPowersOfAttorneyByCertParams): UsersGetPowersOfAttorneyByCert$Params {
    if (!params) {
      return {} as UsersGetPowersOfAttorneyByCert$Params;
    }
    return {
      body: adaptApiGetPowerOfAttorneyDto(params.body),
    };
  }
};
