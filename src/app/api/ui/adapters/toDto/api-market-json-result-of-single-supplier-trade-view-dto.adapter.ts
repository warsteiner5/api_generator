import { MarketJsonResultOfSingleSupplierTradeView } from '../../models/market-json-result-of-single-supplier-trade-view.interface';
import { ApiMarketJsonResultOfSingleSupplierTradeViewDto } from '../../../swagger/models/api-market-json-result-of-single-supplier-trade-view-dto';

export function adaptApiMarketJsonResultOfSingleSupplierTradeViewDto(source?: MarketJsonResultOfSingleSupplierTradeView | null): ApiMarketJsonResultOfSingleSupplierTradeViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfSingleSupplierTradeViewDto;
}
