import { BiddingInfoTypeAltEnum } from '../../enums/bidding-info-type-alt.enum';
import { ApiBiddingInfoTypeAltEnum } from '../../../swagger/models/api-bidding-info-type';

export function adaptApiBiddingInfoTypeAltEnum(source?: BiddingInfoTypeAltEnum | null): ApiBiddingInfoTypeAltEnum {
  switch (source) {
    case BiddingInfoTypeAltEnum.Unknown:
      return ApiBiddingInfoTypeAltEnum.Unknown;
    case BiddingInfoTypeAltEnum.Winner:
      return ApiBiddingInfoTypeAltEnum.Winner;
    case BiddingInfoTypeAltEnum.Completed:
      return ApiBiddingInfoTypeAltEnum.Completed;
    case BiddingInfoTypeAltEnum.Warning:
      return ApiBiddingInfoTypeAltEnum.Warning;
    default:
      throw new Error(`Enum value is not defined: BiddingInfoTypeAltEnum=${String(source)}`);
  }
}
