import { ApiUserNameInfoAltDto } from '../../../swagger/models/api-user-name-info';
import { UserNameInfoAlt } from '../../models/user-name-info-alt.interface';
import { userFullNameAltAdapter } from './user-full-name-alt.adapter';

export const userNameInfoAltAdapter = (source?: ApiUserNameInfoAltDto | null): UserNameInfoAlt => {
  return {
    ...userFullNameAltAdapter(source as unknown as Parameters<typeof userFullNameAltAdapter>[0]),
    id: source?.Id,
  };
}
