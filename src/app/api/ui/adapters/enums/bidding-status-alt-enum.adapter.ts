import { ApiBiddingStatusAltEnum } from '../../../swagger/models/api-bidding-status';
import { BiddingStatusAltEnum } from '../../enums/bidding-status-alt.enum';

export const biddingStatusAltEnumAdapter = (source?: ApiBiddingStatusAltEnum | null): BiddingStatusAltEnum => {
  switch (source) {
    case ApiBiddingStatusAltEnum.Unknown:
      return BiddingStatusAltEnum.Unknown;
    case ApiBiddingStatusAltEnum.Started:
      return BiddingStatusAltEnum.Started;
    case ApiBiddingStatusAltEnum.Success:
      return BiddingStatusAltEnum.Success;
    case ApiBiddingStatusAltEnum.Error:
      return BiddingStatusAltEnum.Error;
    case ApiBiddingStatusAltEnum.Suspended:
      return BiddingStatusAltEnum.Suspended;
    case ApiBiddingStatusAltEnum.Cancelled:
      return BiddingStatusAltEnum.Cancelled;
    default:
      throw new Error(`Enum value is not defined: ApiBiddingStatusAltEnum=${String(source)}`);
  }
}
