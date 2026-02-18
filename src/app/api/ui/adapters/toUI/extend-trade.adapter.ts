import { ApiExtendTradeDto } from '../../../swagger/models/api-extend-trade-dto';
import { ExtendTrade } from '../../models/extend-trade.interface';
import { adaptApplicationConsiderationAltToUI } from './application-consideration-alt.adapter';
import { adaptFileDocumentAltToUI } from './file-document-alt.adapter';

export function adaptExtendTradeToUI(source?: ApiExtendTradeDto | null): ExtendTrade {
  return {
    applicationConsiderations: (source?.ApplicationConsiderations ?? []).map((item) => adaptApplicationConsiderationAltToUI(item)),
    applicationEndDate: source?.ApplicationEndDate ?? '',
    fileDocuments: (source?.FileDocuments ?? []).map((item) => adaptFileDocumentAltToUI(item)),
    planningConclusionDate: source?.PlanningConclusionDate ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
