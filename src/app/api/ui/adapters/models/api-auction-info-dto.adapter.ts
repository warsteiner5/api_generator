import { AuctionInfo } from '../../models/auction-info.interface';
import { ApiAuctionInfoDto } from '../../../swagger/models/api-auction-info-dto';

export const apiAuctionInfoDtoAdapter = (source?: AuctionInfo | null): ApiAuctionInfoDto => {
  return {
    AuctionId: source?.auctionId,
    EndDate: source?.endDate,
    StartDate: source?.startDate,
  };
}
