import { ApiExtendTradeDto } from '../../../swagger/models/api-extend-trade-dto';
import { ExtendTrade } from '../../models/extend-trade.interface';
import { applicationConsiderationAltAdapter } from './application-consideration-alt.adapter';
import { fileDocumentAltAdapter } from './file-document-alt.adapter';

export const extendTradeAdapter = (source?: ApiExtendTradeDto | null): ExtendTrade => {
  return {
    applicationConsiderations: source?.ApplicationConsiderations?.map((item) => applicationConsiderationAltAdapter(item)),
    applicationEndDate: source?.ApplicationEndDate,
    fileDocuments: source?.FileDocuments?.map((item) => fileDocumentAltAdapter(item)),
    planningConclusionDate: source?.PlanningConclusionDate,
    tradeId: source?.TradeId,
  };
}
