import { ApiAuctionBidDto } from '../../../swagger/models/api-auction-bid-dto';
import { AuctionBid } from '../../models/auction-bid.interface';

export function adaptAuctionBidToUI(source?: ApiAuctionBidDto | null): AuctionBid {
  return {
    id: source?.Id ?? 0,
    isQuotationWithVat: source?.IsQuotationWithVat ?? false,
    price: source?.Price ?? 0,
    priceWithVat: source?.PriceWithVat ?? 0,
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
  };
}
