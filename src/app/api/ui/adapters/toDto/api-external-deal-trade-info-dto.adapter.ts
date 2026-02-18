import { ExternalDealTradeInfo } from '../../models/external-deal-trade-info.interface';
import { ApiExternalDealTradeInfoDto } from '../../../swagger/models/api-external-deal-trade-info-dto';
import { adaptApiExternalDealTradeProductDto } from './api-external-deal-trade-product-dto.adapter';

export function adaptApiExternalDealTradeInfoDto(source?: ExternalDealTradeInfo | null): ApiExternalDealTradeInfoDto {
  return {
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    Products: (source?.products ?? []).map((item) => adaptApiExternalDealTradeProductDto(item)),
    TradeId: source?.tradeId,
    TradeName: source?.tradeName,
  };
}
