import { GenerateTradeProtocolRequestAlt } from '../../models/generate-trade-protocol-request-alt.interface';
import { ApiGenerateTradeProtocolRequestAltDto } from '../../../swagger/models/api-generate-trade-protocol-request';

export function adaptApiGenerateTradeProtocolRequestAltDto(source?: GenerateTradeProtocolRequestAlt | null): ApiGenerateTradeProtocolRequestAltDto {
  return {
    DealId: source?.dealId,
    FromZmo: source?.fromZmo,
    IncludeDocumentFiles: source?.includeDocumentFiles,
    TradeId: source?.tradeId,
  };
}
