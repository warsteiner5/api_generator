import { TradesGetApplicationsArchive$Params } from '../../../swagger/fn/trades/trades-get-applications-archive';

// @ts-ignore
export interface TradesGetApplicationsArchiveParams {
  tradeId: number;
}

export function tradesGetApplicationsArchiveAdapter(params?: TradesGetApplicationsArchiveParams): TradesGetApplicationsArchive$Params {
  if (!params) {
    return {} as TradesGetApplicationsArchive$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
