import { BaseDtoWithCreateAndModificationDatesOfInteger } from '../../models/base-dto-with-create-and-modification-dates-of-integer.interface';
import { ApiBaseDtoWithCreateAndModificationDatesOfInteger } from '../../../swagger/models/api-base-dto-with-create-and-modification-dates-of-integer';

export function adaptApiBaseDtoWithCreateAndModificationDatesOfInteger(source?: BaseDtoWithCreateAndModificationDatesOfInteger | null): ApiBaseDtoWithCreateAndModificationDatesOfInteger {
  return {
    CreatedOn: source?.createdOn,
    Id: source?.id,
    LastModificationDate: source?.lastModificationDate,
  };
}
