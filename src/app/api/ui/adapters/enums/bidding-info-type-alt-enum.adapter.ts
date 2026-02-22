import { ApiBiddingInfoTypeAltEnum } from '../../../swagger/models/api-bidding-info-type';
import { BiddingInfoTypeAltEnum } from '../../enums/bidding-info-type-alt.enum';

export const biddingInfoTypeAltEnumAdapter = (source?: ApiBiddingInfoTypeAltEnum | null): BiddingInfoTypeAltEnum => {
  switch (source) {
    case ApiBiddingInfoTypeAltEnum.Unknown:
      return BiddingInfoTypeAltEnum.Unknown;
    case ApiBiddingInfoTypeAltEnum.Winner:
      return BiddingInfoTypeAltEnum.Winner;
    case ApiBiddingInfoTypeAltEnum.Completed:
      return BiddingInfoTypeAltEnum.Completed;
    case ApiBiddingInfoTypeAltEnum.Warning:
      return BiddingInfoTypeAltEnum.Warning;
    default:
      throw new Error(`Enum value is not defined: ApiBiddingInfoTypeAltEnum=${String(source)}`);
  }
}
