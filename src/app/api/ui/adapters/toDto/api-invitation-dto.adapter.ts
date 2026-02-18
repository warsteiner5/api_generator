import { Invitation } from '../../models/invitation.interface';
import { ApiInvitationDto } from '../../../swagger/models/api-invitation-dto';

export function adaptApiInvitationDto(source?: Invitation | null): ApiInvitationDto {
  return (source ?? {}) as ApiInvitationDto;
}
