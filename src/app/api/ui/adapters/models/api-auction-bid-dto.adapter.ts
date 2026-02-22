import { AuctionBid } from '../../models/auction-bid.interface';
import { ApiAuctionBidDto } from '../../../swagger/models/api-auction-bid-dto';

export const apiAuctionBidDtoAdapter = (source?: AuctionBid | null): ApiAuctionBidDto => {
  return {
    Id: source?.id,
    IsQuotationWithVat: source?.isQuotationWithVat,
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
  };
}
