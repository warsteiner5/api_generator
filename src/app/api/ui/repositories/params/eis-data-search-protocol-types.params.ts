import { EisDataSearchProtocolTypes$Params } from '../../../swagger/fn/eis-data/eis-data-search-protocol-types';

export interface EisDataSearchProtocolTypesParams {
  tradeId: number;
  purchaseMethodCode: number;
}

export const eisDataSearchProtocolTypesParamsAdapter = {
  adapt(params?: EisDataSearchProtocolTypesParams): EisDataSearchProtocolTypes$Params {
    if (!params) {
      return {} as EisDataSearchProtocolTypes$Params;
    }
    return {
      tradeId: params.tradeId,
      purchaseMethodCode: params.purchaseMethodCode,
    };
  }
};
