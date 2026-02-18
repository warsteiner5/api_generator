import { BiddingStatusAltEnum } from '../../enums/bidding-status-alt.enum';
import { ApiBiddingStatusAltEnum } from '../../../swagger/models/api-bidding-status';

export function adaptApiBiddingStatusAltEnum(source?: BiddingStatusAltEnum | null): ApiBiddingStatusAltEnum {
  switch (source) {
    case BiddingStatusAltEnum.Unknown:
      return ApiBiddingStatusAltEnum.Unknown;
    case BiddingStatusAltEnum.Started:
      return ApiBiddingStatusAltEnum.Started;
    case BiddingStatusAltEnum.Success:
      return ApiBiddingStatusAltEnum.Success;
    case BiddingStatusAltEnum.Error:
      return ApiBiddingStatusAltEnum.Error;
    case BiddingStatusAltEnum.Suspended:
      return ApiBiddingStatusAltEnum.Suspended;
    case BiddingStatusAltEnum.Cancelled:
      return ApiBiddingStatusAltEnum.Cancelled;
    default:
      throw new Error(`Enum value is not defined: BiddingStatusAltEnum=${String(source)}`);
  }
}
