import { ApiBiddingParticipationStatusAltEnum } from '../../../swagger/models/api-bidding-participation-status';
import { BiddingParticipationStatusAltEnum } from '../../enums/bidding-participation-status-alt.enum';

export function adaptBiddingParticipationStatusAltEnumToUI(source?: ApiBiddingParticipationStatusAltEnum | null): BiddingParticipationStatusAltEnum {
  switch (source) {
    case ApiBiddingParticipationStatusAltEnum.Unknown:
      return BiddingParticipationStatusAltEnum.Unknown;
    case ApiBiddingParticipationStatusAltEnum.Participant:
      return BiddingParticipationStatusAltEnum.Participant;
    case ApiBiddingParticipationStatusAltEnum.NotParticipant:
      return BiddingParticipationStatusAltEnum.NotParticipant;
    default:
      throw new Error(`Enum value is not defined: ApiBiddingParticipationStatusAltEnum=${String(source)}`);
  }
}
