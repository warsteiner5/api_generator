import { ApiTradeAutoInvitationsInfoDto } from '../../../swagger/models/api-trade-auto-invitations-info-dto';
import { TradeAutoInvitationsInfo } from '../../models/trade-auto-invitations-info.interface';
import { adaptFileContentModelAltToUI } from './file-content-model-alt.adapter';

export function adaptTradeAutoInvitationsInfoToUI(source?: ApiTradeAutoInvitationsInfoDto | null): TradeAutoInvitationsInfo {
  return {
    autoInvitationsForTradeReport: adaptFileContentModelAltToUI(source?.AutoInvitationsForTradeReport),
    sentToDistributionSystem: source?.SentToDistributionSystem ?? false,
    tradeId: source?.TradeId ?? 0,
  };
}
