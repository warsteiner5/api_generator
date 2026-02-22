import { BiddingParticipationStatusAltEnum } from '../../enums/bidding-participation-status-alt.enum';
import { ApiBiddingParticipationStatusAltEnum } from '../../../swagger/models/api-bidding-participation-status';

export const apiBiddingParticipationStatusAltEnumAdapter = (source?: BiddingParticipationStatusAltEnum | null): ApiBiddingParticipationStatusAltEnum => {
  switch (source) {
    case BiddingParticipationStatusAltEnum.Unknown:
      return ApiBiddingParticipationStatusAltEnum.Unknown;
    case BiddingParticipationStatusAltEnum.Participant:
      return ApiBiddingParticipationStatusAltEnum.Participant;
    case BiddingParticipationStatusAltEnum.NotParticipant:
      return ApiBiddingParticipationStatusAltEnum.NotParticipant;
    default:
      throw new Error(`Enum value is not defined: BiddingParticipationStatusAltEnum=${String(source)}`);
  }
}
