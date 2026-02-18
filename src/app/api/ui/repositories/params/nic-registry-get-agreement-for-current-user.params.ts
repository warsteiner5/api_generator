import { NicRegistryGetAgreementForCurrentUser$Params } from '../../../swagger/fn/nic-registry/nic-registry-get-agreement-for-current-user';

export interface NicRegistryGetAgreementForCurrentUserParams {
}

export const nicRegistryGetAgreementForCurrentUserParamsAdapter = {
  adapt(params?: NicRegistryGetAgreementForCurrentUserParams): NicRegistryGetAgreementForCurrentUser$Params {
    if (!params) {
      return {} as NicRegistryGetAgreementForCurrentUser$Params;
    }
    return {
    };
  }
};
