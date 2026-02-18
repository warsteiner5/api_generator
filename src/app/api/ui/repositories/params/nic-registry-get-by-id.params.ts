import { NicRegistryGetById$Params } from '../../../swagger/fn/nic-registry/nic-registry-get-by-id';

export interface NicRegistryGetByIdParams {
  entryId: number;
}

export const nicRegistryGetByIdParamsAdapter = {
  adapt(params?: NicRegistryGetByIdParams): NicRegistryGetById$Params {
    if (!params) {
      return {} as NicRegistryGetById$Params;
    }
    return {
      entryId: params.entryId,
    };
  }
};
