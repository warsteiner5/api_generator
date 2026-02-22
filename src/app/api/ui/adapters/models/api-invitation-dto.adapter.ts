import { Invitation } from '../../models/invitation.interface';
import { ApiInvitationDto } from '../../../swagger/models/api-invitation-dto';

export const apiInvitationDtoAdapter = (source?: Invitation | null): ApiInvitationDto => {
  return (source ?? {}) as ApiInvitationDto;
}
