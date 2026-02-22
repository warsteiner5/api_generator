import { ExportTradesFilterAlt } from '../../models/export-trades-filter-alt.interface';
import { ApiExportTradesFilterAltDto } from '../../../swagger/models/api-export-trades-filter';

export const apiExportTradesFilterAltDtoAdapter = (source?: ExportTradesFilterAlt | null): ApiExportTradesFilterAltDto => {
  return {
    CanExportAllTrades: source?.canExportAllTrades,
    IsAdmin: source?.isAdmin,
    TradeIds: source?.tradeIds,
  };
}
