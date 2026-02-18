import { ApiExportTradesFilterAltDto } from '../../../swagger/models/api-export-trades-filter';
import { ExportTradesFilterAlt } from '../../models/export-trades-filter-alt.interface';

export function adaptExportTradesFilterAltToUI(source?: ApiExportTradesFilterAltDto | null): ExportTradesFilterAlt {
  return {
    canExportAllTrades: source?.CanExportAllTrades ?? false,
    isAdmin: source?.IsAdmin ?? false,
    tradeIds: source?.TradeIds ?? [],
  };
}
