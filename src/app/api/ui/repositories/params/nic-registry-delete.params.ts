import { NicRegistryDelete$Params } from '../../../swagger/fn/nic-registry/nic-registry-delete';

// @ts-ignore
export interface NicRegistryDeleteParams {
  entryId: number;
}

export function nicRegistryDeleteAdapter(params?: NicRegistryDeleteParams): NicRegistryDelete$Params {
  if (!params) {
    return {} as NicRegistryDelete$Params;
  }
  return {
      entryId: params.entryId,
  };
}
