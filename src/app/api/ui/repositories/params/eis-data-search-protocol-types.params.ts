import { EisDataSearchProtocolTypes$Params } from '../../../swagger/fn/eis-data/eis-data-search-protocol-types';

// @ts-ignore
export interface EisDataSearchProtocolTypesParams {
  tradeId: number;
  purchaseMethodCode: number;
}

export function eisDataSearchProtocolTypesAdapter(params?: EisDataSearchProtocolTypesParams): EisDataSearchProtocolTypes$Params {
  if (!params) {
    return {} as EisDataSearchProtocolTypes$Params;
  }
  return {
      tradeId: params.tradeId,
      purchaseMethodCode: params.purchaseMethodCode,
  };
}
