import { ExternalDealTradeProduct } from './external-deal-trade-product.interface';

export interface ExternalDealTradeInfo {
  price: number;
  priceWithVat: number;
  products: ExternalDealTradeProduct[];
  tradeId: number;
  tradeName: string;
}
