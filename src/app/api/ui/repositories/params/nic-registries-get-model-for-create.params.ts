import { NicRegistriesGetModelForCreate$Params } from '../../../swagger/fn/nic-registries/nic-registries-get-model-for-create';

export interface NicRegistriesGetModelForCreateParams {
}

export const nicRegistriesGetModelForCreateParamsAdapter = {
  adapt(params?: NicRegistriesGetModelForCreateParams): NicRegistriesGetModelForCreate$Params {
    if (!params) {
      return {} as NicRegistriesGetModelForCreate$Params;
    }
    return {
    };
  }
};
