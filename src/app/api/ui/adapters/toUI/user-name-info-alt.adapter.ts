import { ApiUserNameInfoAltDto } from '../../../swagger/models/api-user-name-info';
import { UserNameInfoAlt } from '../../models/user-name-info-alt.interface';

export function adaptUserNameInfoAltToUI(source?: ApiUserNameInfoAltDto | null): UserNameInfoAlt {
  return (source ?? {}) as UserNameInfoAlt;
}
