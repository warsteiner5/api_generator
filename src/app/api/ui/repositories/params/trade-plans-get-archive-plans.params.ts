import { TradePlansArchiveFilterObjectAlt } from '../../models/trade-plans-archive-filter-object-alt.interface';
import { TradePlansGetArchivePlans$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-archive-plans';
import { apiTradePlansArchiveFilterObjectAltDtoAdapter } from '../../adapters/models/api-trade-plans-archive-filter-object.adapter';

// @ts-ignore
export interface TradePlansGetArchivePlansParams {
  body?: TradePlansArchiveFilterObjectAlt;
}

export function tradePlansGetArchivePlansAdapter(params?: TradePlansGetArchivePlansParams): TradePlansGetArchivePlans$Params {
  if (!params) {
    return {} as TradePlansGetArchivePlans$Params;
  }
  return {
      body: apiTradePlansArchiveFilterObjectAltDtoAdapter(params.body),
  };
}
