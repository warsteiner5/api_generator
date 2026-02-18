import { ApiParticipantOfferStateEnum } from '../../../swagger/models/api-participant-offer-state-enum';
import { ParticipantOfferStateEnum } from '../../enums/participant-offer-state.enum';

export function adaptParticipantOfferStateEnumToUI(source?: ApiParticipantOfferStateEnum | null): ParticipantOfferStateEnum {
  switch (source) {
    case ApiParticipantOfferStateEnum.Draft:
      return ParticipantOfferStateEnum.Draft;
    case ApiParticipantOfferStateEnum.WaitingForPublication:
      return ParticipantOfferStateEnum.WaitingForPublication;
    case ApiParticipantOfferStateEnum.Active:
      return ParticipantOfferStateEnum.Active;
    case ApiParticipantOfferStateEnum.NotActive:
      return ParticipantOfferStateEnum.NotActive;
    case ApiParticipantOfferStateEnum.Removed:
      return ParticipantOfferStateEnum.Removed;
    case ApiParticipantOfferStateEnum.WaitingForApprove:
      return ParticipantOfferStateEnum.WaitingForApprove;
    case ApiParticipantOfferStateEnum.RequireVerification:
      return ParticipantOfferStateEnum.RequireVerification;
    default:
      throw new Error(`Enum value is not defined: ApiParticipantOfferStateEnum=${String(source)}`);
  }
}
