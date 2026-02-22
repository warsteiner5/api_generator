import { NicRegistryGetById$Params } from '../../../swagger/fn/nic-registry/nic-registry-get-by-id';

// @ts-ignore
export interface NicRegistryGetByIdParams {
  entryId: number;
}

export function nicRegistryGetByIdAdapter(params?: NicRegistryGetByIdParams): NicRegistryGetById$Params {
  if (!params) {
    return {} as NicRegistryGetById$Params;
  }
  return {
      entryId: params.entryId,
  };
}
