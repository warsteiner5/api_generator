import { ApiInvitationDto } from '../../../swagger/models/api-invitation-dto';
import { Invitation } from '../../models/invitation.interface';

export const invitationAdapter = (source?: ApiInvitationDto | null): Invitation => {
  return (source ?? {}) as Invitation;
}
