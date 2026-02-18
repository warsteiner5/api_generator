import { ApiGenerateTradeProtocolRequestAltDto } from '../../../swagger/models/api-generate-trade-protocol-request';
import { GenerateTradeProtocolRequestAlt } from '../../models/generate-trade-protocol-request-alt.interface';

export function adaptGenerateTradeProtocolRequestAltToUI(source?: ApiGenerateTradeProtocolRequestAltDto | null): GenerateTradeProtocolRequestAlt {
  return {
    dealId: source?.DealId ?? 0,
    fromZmo: source?.FromZmo ?? false,
    includeDocumentFiles: source?.IncludeDocumentFiles ?? false,
    tradeId: source?.TradeId ?? 0,
  };
}
