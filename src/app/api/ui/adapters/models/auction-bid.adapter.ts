import { ApiAuctionBidDto } from '../../../swagger/models/api-auction-bid-dto';
import { AuctionBid } from '../../models/auction-bid.interface';

export const auctionBidAdapter = (source?: ApiAuctionBidDto | null): AuctionBid => {
  return {
    id: source?.Id,
    isQuotationWithVat: source?.IsQuotationWithVat,
    price: source?.Price,
    priceWithVat: source?.PriceWithVat,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
  };
}
