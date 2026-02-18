import { NicRegistriesGetAgreementForCurrentUser$Params } from '../../../swagger/fn/nic-registries/nic-registries-get-agreement-for-current-user';

export interface NicRegistriesGetAgreementForCurrentUserParams {
}

export const nicRegistriesGetAgreementForCurrentUserParamsAdapter = {
  adapt(params?: NicRegistriesGetAgreementForCurrentUserParams): NicRegistriesGetAgreementForCurrentUser$Params {
    if (!params) {
      return {} as NicRegistriesGetAgreementForCurrentUser$Params;
    }
    return {
    };
  }
};
