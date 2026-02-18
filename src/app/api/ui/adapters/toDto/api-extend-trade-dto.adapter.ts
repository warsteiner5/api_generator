import { ExtendTrade } from '../../models/extend-trade.interface';
import { ApiExtendTradeDto } from '../../../swagger/models/api-extend-trade-dto';
import { adaptApiApplicationConsiderationAltDto } from './api-application-consideration.adapter';
import { adaptApiFileDocumentAltDto } from './api-file-document.adapter';

export function adaptApiExtendTradeDto(source?: ExtendTrade | null): ApiExtendTradeDto {
  return {
    ApplicationConsiderations: (source?.applicationConsiderations ?? []).map((item) => adaptApiApplicationConsiderationAltDto(item)),
    ApplicationEndDate: source?.applicationEndDate,
    FileDocuments: (source?.fileDocuments ?? []).map((item) => adaptApiFileDocumentAltDto(item)),
    PlanningConclusionDate: source?.planningConclusionDate,
    TradeId: source?.tradeId,
  };
}
