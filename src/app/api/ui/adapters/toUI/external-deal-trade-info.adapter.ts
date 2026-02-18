import { ApiExternalDealTradeInfoDto } from '../../../swagger/models/api-external-deal-trade-info-dto';
import { ExternalDealTradeInfo } from '../../models/external-deal-trade-info.interface';
import { adaptExternalDealTradeProductToUI } from './external-deal-trade-product.adapter';

export function adaptExternalDealTradeInfoToUI(source?: ApiExternalDealTradeInfoDto | null): ExternalDealTradeInfo {
  return {
    price: source?.Price ?? 0,
    priceWithVat: source?.PriceWithVat ?? 0,
    products: (source?.Products ?? []).map((item) => adaptExternalDealTradeProductToUI(item)),
    tradeId: source?.TradeId ?? 0,
    tradeName: source?.TradeName ?? '',
  };
}
