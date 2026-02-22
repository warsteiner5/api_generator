import { ApiTradeAutoInvitationsInfoDto } from '../../../swagger/models/api-trade-auto-invitations-info-dto';
import { TradeAutoInvitationsInfo } from '../../models/trade-auto-invitations-info.interface';
import { fileContentModelAltAdapter } from './file-content-model-alt.adapter';

export const tradeAutoInvitationsInfoAdapter = (source?: ApiTradeAutoInvitationsInfoDto | null): TradeAutoInvitationsInfo => {
  return {
    autoInvitationsForTradeReport: source?.AutoInvitationsForTradeReport === null ? undefined : fileContentModelAltAdapter(source?.AutoInvitationsForTradeReport),
    sentToDistributionSystem: source?.SentToDistributionSystem,
    tradeId: source?.TradeId,
  };
}
