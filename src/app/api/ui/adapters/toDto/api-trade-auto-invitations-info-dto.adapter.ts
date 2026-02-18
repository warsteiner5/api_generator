import { TradeAutoInvitationsInfo } from '../../models/trade-auto-invitations-info.interface';
import { ApiTradeAutoInvitationsInfoDto } from '../../../swagger/models/api-trade-auto-invitations-info-dto';
import { adaptApiFileContentModelAltDto } from './api-file-content-model.adapter';

export function adaptApiTradeAutoInvitationsInfoDto(source?: TradeAutoInvitationsInfo | null): ApiTradeAutoInvitationsInfoDto {
  return {
    AutoInvitationsForTradeReport: adaptApiFileContentModelAltDto(source?.autoInvitationsForTradeReport),
    SentToDistributionSystem: source?.sentToDistributionSystem,
    TradeId: source?.tradeId,
  };
}
