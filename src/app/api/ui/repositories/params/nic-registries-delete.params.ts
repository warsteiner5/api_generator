import { NicRegistriesDelete$Params } from '../../../swagger/fn/nic-registries/nic-registries-delete';

export interface NicRegistriesDeleteParams {
  entryId: number;
}

export const nicRegistriesDeleteParamsAdapter = {
  adapt(params?: NicRegistriesDeleteParams): NicRegistriesDelete$Params {
    if (!params) {
      return {} as NicRegistriesDelete$Params;
    }
    return {
      entryId: params.entryId,
    };
  }
};
