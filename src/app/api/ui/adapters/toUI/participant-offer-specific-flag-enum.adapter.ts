import { ApiParticipantOfferSpecificFlagEnum } from '../../../swagger/models/api-participant-offer-specific-flag-enum';
import { ParticipantOfferSpecificFlagEnum } from '../../enums/participant-offer-specific-flag.enum';

export function adaptParticipantOfferSpecificFlagEnumToUI(source?: ApiParticipantOfferSpecificFlagEnum | null): ParticipantOfferSpecificFlagEnum {
  switch (source) {
    case ApiParticipantOfferSpecificFlagEnum.Monopolist:
      return ParticipantOfferSpecificFlagEnum.Monopolist;
    default:
      throw new Error(`Enum value is not defined: ApiParticipantOfferSpecificFlagEnum=${String(source)}`);
  }
}
