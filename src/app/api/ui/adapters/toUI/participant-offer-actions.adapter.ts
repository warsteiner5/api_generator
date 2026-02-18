import { ApiParticipantOfferActionsDto } from '../../../swagger/models/api-participant-offer-actions-dto';
import { ParticipantOfferActions } from '../../models/participant-offer-actions.interface';

export function adaptParticipantOfferActionsToUI(source?: ApiParticipantOfferActionsDto | null): ParticipantOfferActions {
  return {
    allowDelete: source?.AllowDelete ?? false,
    allowEdit: source?.AllowEdit ?? false,
    allowHide: source?.AllowHide ?? false,
  };
}
