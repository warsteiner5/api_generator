import { ApiMarketJsonResultOfSingleSupplierTradeViewDto } from '../../../swagger/models/api-market-json-result-of-single-supplier-trade-view-dto';
import { MarketJsonResultOfSingleSupplierTradeView } from '../../models/market-json-result-of-single-supplier-trade-view.interface';

export function adaptMarketJsonResultOfSingleSupplierTradeViewToUI(source?: ApiMarketJsonResultOfSingleSupplierTradeViewDto | null): MarketJsonResultOfSingleSupplierTradeView {
  return (source ?? {}) as MarketJsonResultOfSingleSupplierTradeView;
}
