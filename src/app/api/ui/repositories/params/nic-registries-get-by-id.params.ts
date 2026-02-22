import { NicRegistriesGetById$Params } from '../../../swagger/fn/nic-registries/nic-registries-get-by-id';

// @ts-ignore
export interface NicRegistriesGetByIdParams {
  entryId: number;
}

export function nicRegistriesGetByIdAdapter(params?: NicRegistriesGetByIdParams): NicRegistriesGetById$Params {
  if (!params) {
    return {} as NicRegistriesGetById$Params;
  }
  return {
      entryId: params.entryId,
  };
}
