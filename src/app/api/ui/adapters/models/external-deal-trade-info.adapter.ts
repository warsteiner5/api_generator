import { ApiExternalDealTradeInfoDto } from '../../../swagger/models/api-external-deal-trade-info-dto';
import { ExternalDealTradeInfo } from '../../models/external-deal-trade-info.interface';
import { externalDealTradeProductAdapter } from './external-deal-trade-product.adapter';

export const externalDealTradeInfoAdapter = (source?: ApiExternalDealTradeInfoDto | null): ExternalDealTradeInfo => {
  return {
    price: source?.Price,
    priceWithVat: source?.PriceWithVat,
    products: source?.Products?.map((item) => externalDealTradeProductAdapter(item)),
    tradeId: source?.TradeId,
    tradeName: source?.TradeName,
  };
}
