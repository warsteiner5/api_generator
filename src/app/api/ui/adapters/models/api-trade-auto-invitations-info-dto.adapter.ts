import { TradeAutoInvitationsInfo } from '../../models/trade-auto-invitations-info.interface';
import { ApiTradeAutoInvitationsInfoDto } from '../../../swagger/models/api-trade-auto-invitations-info-dto';
import { apiFileContentModelAltDtoAdapter } from './api-file-content-model.adapter';

export const apiTradeAutoInvitationsInfoDtoAdapter = (source?: TradeAutoInvitationsInfo | null): ApiTradeAutoInvitationsInfoDto => {
  return {
    AutoInvitationsForTradeReport: source?.autoInvitationsForTradeReport === null ? undefined : apiFileContentModelAltDtoAdapter(source?.autoInvitationsForTradeReport),
    SentToDistributionSystem: source?.sentToDistributionSystem,
    TradeId: source?.tradeId,
  };
}
