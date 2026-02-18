import { ParticipantOfferSpecificFlagEnum } from '../../enums/participant-offer-specific-flag.enum';
import { ApiParticipantOfferSpecificFlagEnum } from '../../../swagger/models/api-participant-offer-specific-flag-enum';

export function adaptApiParticipantOfferSpecificFlagEnum(source?: ParticipantOfferSpecificFlagEnum | null): ApiParticipantOfferSpecificFlagEnum {
  switch (source) {
    case ParticipantOfferSpecificFlagEnum.Monopolist:
      return ApiParticipantOfferSpecificFlagEnum.Monopolist;
    default:
      throw new Error(`Enum value is not defined: ParticipantOfferSpecificFlagEnum=${String(source)}`);
  }
}
