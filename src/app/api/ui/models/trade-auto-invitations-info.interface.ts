import { FileContentModelAlt } from './file-content-model-alt.interface';

export interface TradeAutoInvitationsInfo {
  autoInvitationsForTradeReport: FileContentModelAlt;
  sentToDistributionSystem: boolean;
  tradeId: number;
}
