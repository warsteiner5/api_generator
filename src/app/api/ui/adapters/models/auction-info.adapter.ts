import { ApiAuctionInfoDto } from '../../../swagger/models/api-auction-info-dto';
import { AuctionInfo } from '../../models/auction-info.interface';

export const auctionInfoAdapter = (source?: ApiAuctionInfoDto | null): AuctionInfo => {
  return {
    auctionId: source?.AuctionId,
    endDate: source?.EndDate,
    startDate: source?.StartDate,
  };
}
