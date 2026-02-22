import { ApiBaseDtoWithCreateAndModificationDatesOfInteger } from '../../../swagger/models/api-base-dto-with-create-and-modification-dates-of-integer';
import { BaseDtoWithCreateAndModificationDatesOfInteger } from '../../models/base-dto-with-create-and-modification-dates-of-integer.interface';

export const baseDtoWithCreateAndModificationDatesOfIntegerAdapter = (source?: ApiBaseDtoWithCreateAndModificationDatesOfInteger | null): BaseDtoWithCreateAndModificationDatesOfInteger => {
  return {
    createdOn: source?.CreatedOn,
    id: source?.Id,
    lastModificationDate: source?.LastModificationDate,
  };
}
