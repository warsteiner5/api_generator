import { UserNameInfoAlt } from '../../models/user-name-info-alt.interface';
import { ApiUserNameInfoAltDto } from '../../../swagger/models/api-user-name-info';
import { apiUserFullNameAltDtoAdapter } from './api-user-full-name.adapter';

export const apiUserNameInfoAltDtoAdapter = (source?: UserNameInfoAlt | null): ApiUserNameInfoAltDto => {
  return {
    ...apiUserFullNameAltDtoAdapter(source as unknown as Parameters<typeof apiUserFullNameAltDtoAdapter>[0]),
    Id: source?.id,
  };
}
