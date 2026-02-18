import { UserFullNameAlt } from '../../models/user-full-name-alt.interface';
import { ApiUserFullNameAltDto } from '../../../swagger/models/api-user-full-name';

export function adaptApiUserFullNameAltDto(source?: UserFullNameAlt | null): ApiUserFullNameAltDto {
  return {
    FirstName: source?.firstName,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
  };
}
