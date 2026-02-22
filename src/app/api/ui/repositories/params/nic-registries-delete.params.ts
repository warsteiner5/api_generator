import { NicRegistriesDelete$Params } from '../../../swagger/fn/nic-registries/nic-registries-delete';

// @ts-ignore
export interface NicRegistriesDeleteParams {
  entryId: number;
}

export function nicRegistriesDeleteAdapter(params?: NicRegistriesDeleteParams): NicRegistriesDelete$Params {
  if (!params) {
    return {} as NicRegistriesDelete$Params;
  }
  return {
      entryId: params.entryId,
  };
}
