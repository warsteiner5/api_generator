import { TradePlansArchiveFilterObjectAlt } from '../../models/trade-plans-archive-filter-object-alt.interface';
import { TradePlansGetArchivePlans$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-archive-plans';
import { adaptApiTradePlansArchiveFilterObjectAltDto } from '../../adapters/toDto/api-trade-plans-archive-filter-object.adapter';

export interface TradePlansGetArchivePlansParams {
  body?: TradePlansArchiveFilterObjectAlt;
}

export const tradePlansGetArchivePlansParamsAdapter = {
  adapt(params?: TradePlansGetArchivePlansParams): TradePlansGetArchivePlans$Params {
    if (!params) {
      return {} as TradePlansGetArchivePlans$Params;
    }
    return {
      body: adaptApiTradePlansArchiveFilterObjectAltDto(params.body),
    };
  }
};
