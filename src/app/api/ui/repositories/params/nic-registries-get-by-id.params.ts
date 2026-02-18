import { NicRegistriesGetById$Params } from '../../../swagger/fn/nic-registries/nic-registries-get-by-id';

export interface NicRegistriesGetByIdParams {
  entryId: number;
}

export const nicRegistriesGetByIdParamsAdapter = {
  adapt(params?: NicRegistriesGetByIdParams): NicRegistriesGetById$Params {
    if (!params) {
      return {} as NicRegistriesGetById$Params;
    }
    return {
      entryId: params.entryId,
    };
  }
};
