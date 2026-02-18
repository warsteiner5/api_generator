import { ParticipantOfferActions } from '../../models/participant-offer-actions.interface';
import { ApiParticipantOfferActionsDto } from '../../../swagger/models/api-participant-offer-actions-dto';

export function adaptApiParticipantOfferActionsDto(source?: ParticipantOfferActions | null): ApiParticipantOfferActionsDto {
  return {
    AllowDelete: source?.allowDelete,
    AllowEdit: source?.allowEdit,
    AllowHide: source?.allowHide,
  };
}
