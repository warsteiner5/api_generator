import { ExtendTrade } from '../../models/extend-trade.interface';
import { ApiExtendTradeDto } from '../../../swagger/models/api-extend-trade-dto';
import { apiApplicationConsiderationAltDtoAdapter } from './api-application-consideration.adapter';
import { apiFileDocumentAltDtoAdapter } from './api-file-document.adapter';

export const apiExtendTradeDtoAdapter = (source?: ExtendTrade | null): ApiExtendTradeDto => {
  return {
    ApplicationConsiderations: source?.applicationConsiderations?.map((item) => apiApplicationConsiderationAltDtoAdapter(item)),
    ApplicationEndDate: source?.applicationEndDate,
    FileDocuments: source?.fileDocuments?.map((item) => apiFileDocumentAltDtoAdapter(item)),
    PlanningConclusionDate: source?.planningConclusionDate,
    TradeId: source?.tradeId,
  };
}
