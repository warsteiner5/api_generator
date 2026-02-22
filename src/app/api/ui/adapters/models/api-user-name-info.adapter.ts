import { UserNameInfoAlt } from '../../models/user-name-info-alt.interface';
import { ApiUserNameInfoAltDto } from '../../../swagger/models/api-user-name-info';

export const apiUserNameInfoAltDtoAdapter = (source?: UserNameInfoAlt | null): ApiUserNameInfoAltDto => {
  return (source ?? {}) as ApiUserNameInfoAltDto;
}
