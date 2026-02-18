import { ChangePasswordRequestAlt } from '../../models/change-password-request-alt.interface';
import { UsersChangePassword$Params } from '../../../swagger/fn/users/users-change-password';
import { adaptApiChangePasswordRequestAltDto } from '../../adapters/toDto/api-change-password-request.adapter';

export interface UsersChangePasswordParams {
  body?: ChangePasswordRequestAlt;
}

export const usersChangePasswordParamsAdapter = {
  adapt(params?: UsersChangePasswordParams): UsersChangePassword$Params {
    if (!params) {
      return {} as UsersChangePassword$Params;
    }
    return {
      body: adaptApiChangePasswordRequestAltDto(params.body),
    };
  }
};
