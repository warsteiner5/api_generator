import { TradesGetApplicationsArchive$Params } from '../../../swagger/fn/trades/trades-get-applications-archive';

export interface TradesGetApplicationsArchiveParams {
  tradeId: number;
}

export const tradesGetApplicationsArchiveParamsAdapter = {
  adapt(params?: TradesGetApplicationsArchiveParams): TradesGetApplicationsArchive$Params {
    if (!params) {
      return {} as TradesGetApplicationsArchive$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
