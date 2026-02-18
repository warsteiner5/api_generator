import { ApiAuctionInfoDto } from '../../../swagger/models/api-auction-info-dto';
import { AuctionInfo } from '../../models/auction-info.interface';

export function adaptAuctionInfoToUI(source?: ApiAuctionInfoDto | null): AuctionInfo {
  return {
    auctionId: source?.AuctionId ?? 0,
    endDate: source?.EndDate ?? '',
    startDate: source?.StartDate ?? '',
  };
}
