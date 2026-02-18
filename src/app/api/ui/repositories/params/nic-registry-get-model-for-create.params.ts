import { NicRegistryGetModelForCreate$Params } from '../../../swagger/fn/nic-registry/nic-registry-get-model-for-create';

export interface NicRegistryGetModelForCreateParams {
}

export const nicRegistryGetModelForCreateParamsAdapter = {
  adapt(params?: NicRegistryGetModelForCreateParams): NicRegistryGetModelForCreate$Params {
    if (!params) {
      return {} as NicRegistryGetModelForCreate$Params;
    }
    return {
    };
  }
};
