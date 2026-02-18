import { UsersGetAgreement$Params } from '../../../swagger/fn/users/users-get-agreement';

export interface UsersGetAgreementParams {
}

export const usersGetAgreementParamsAdapter = {
  adapt(params?: UsersGetAgreementParams): UsersGetAgreement$Params {
    if (!params) {
      return {} as UsersGetAgreement$Params;
    }
    return {
    };
  }
};
