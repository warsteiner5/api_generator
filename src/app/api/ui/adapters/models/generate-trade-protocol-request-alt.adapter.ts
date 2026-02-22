import { ApiGenerateTradeProtocolRequestAltDto } from '../../../swagger/models/api-generate-trade-protocol-request';
import { GenerateTradeProtocolRequestAlt } from '../../models/generate-trade-protocol-request-alt.interface';

export const generateTradeProtocolRequestAltAdapter = (source?: ApiGenerateTradeProtocolRequestAltDto | null): GenerateTradeProtocolRequestAlt => {
  return {
    dealId: source?.DealId,
    fromZmo: source?.FromZmo,
    includeDocumentFiles: source?.IncludeDocumentFiles,
    tradeId: source?.TradeId,
  };
}
