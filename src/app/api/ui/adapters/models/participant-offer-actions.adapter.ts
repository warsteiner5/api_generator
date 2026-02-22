import { ApiParticipantOfferActionsDto } from '../../../swagger/models/api-participant-offer-actions-dto';
import { ParticipantOfferActions } from '../../models/participant-offer-actions.interface';

export const participantOfferActionsAdapter = (source?: ApiParticipantOfferActionsDto | null): ParticipantOfferActions => {
  return {
    allowDelete: source?.AllowDelete,
    allowEdit: source?.AllowEdit,
    allowHide: source?.AllowHide,
  };
}
