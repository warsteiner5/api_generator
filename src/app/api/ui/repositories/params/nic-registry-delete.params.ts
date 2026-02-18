import { NicRegistryDelete$Params } from '../../../swagger/fn/nic-registry/nic-registry-delete';

export interface NicRegistryDeleteParams {
  entryId: number;
}

export const nicRegistryDeleteParamsAdapter = {
  adapt(params?: NicRegistryDeleteParams): NicRegistryDelete$Params {
    if (!params) {
      return {} as NicRegistryDelete$Params;
    }
    return {
      entryId: params.entryId,
    };
  }
};
