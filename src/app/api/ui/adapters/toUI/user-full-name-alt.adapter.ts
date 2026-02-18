import { ApiUserFullNameAltDto } from '../../../swagger/models/api-user-full-name';
import { UserFullNameAlt } from '../../models/user-full-name-alt.interface';

export function adaptUserFullNameAltToUI(source?: ApiUserFullNameAltDto | null): UserFullNameAlt {
  return {
    firstName: source?.FirstName ?? '',
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
  };
}
