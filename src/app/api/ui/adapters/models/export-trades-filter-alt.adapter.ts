import { ApiExportTradesFilterAltDto } from '../../../swagger/models/api-export-trades-filter';
import { ExportTradesFilterAlt } from '../../models/export-trades-filter-alt.interface';

export const exportTradesFilterAltAdapter = (source?: ApiExportTradesFilterAltDto | null): ExportTradesFilterAlt => {
  return {
    canExportAllTrades: source?.CanExportAllTrades,
    isAdmin: source?.IsAdmin,
    tradeIds: source?.TradeIds,
  };
}
