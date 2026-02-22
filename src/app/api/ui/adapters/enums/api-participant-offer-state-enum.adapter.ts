import { ParticipantOfferStateEnum } from '../../enums/participant-offer-state.enum';
import { ApiParticipantOfferStateEnum } from '../../../swagger/models/api-participant-offer-state-enum';

export const apiParticipantOfferStateEnumAdapter = (source?: ParticipantOfferStateEnum | null): ApiParticipantOfferStateEnum => {
  switch (source) {
    case ParticipantOfferStateEnum.Draft:
      return ApiParticipantOfferStateEnum.Draft;
    case ParticipantOfferStateEnum.WaitingForPublication:
      return ApiParticipantOfferStateEnum.WaitingForPublication;
    case ParticipantOfferStateEnum.Active:
      return ApiParticipantOfferStateEnum.Active;
    case ParticipantOfferStateEnum.NotActive:
      return ApiParticipantOfferStateEnum.NotActive;
    case ParticipantOfferStateEnum.Removed:
      return ApiParticipantOfferStateEnum.Removed;
    case ParticipantOfferStateEnum.WaitingForApprove:
      return ApiParticipantOfferStateEnum.WaitingForApprove;
    case ParticipantOfferStateEnum.RequireVerification:
      return ApiParticipantOfferStateEnum.RequireVerification;
    default:
      throw new Error(`Enum value is not defined: ParticipantOfferStateEnum=${String(source)}`);
  }
}
