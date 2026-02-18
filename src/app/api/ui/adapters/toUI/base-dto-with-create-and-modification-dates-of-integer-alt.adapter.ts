import { ApiBaseDtoWithCreateAndModificationDatesOfIntegerAltDto } from '../../../swagger/models/api-base-dto-with-create-and-modification-dates-of-integer';
import { BaseDtoWithCreateAndModificationDatesOfIntegerAlt } from '../../models/base-dto-with-create-and-modification-dates-of-integer-alt.interface';

export function adaptBaseDtoWithCreateAndModificationDatesOfIntegerAltToUI(source?: ApiBaseDtoWithCreateAndModificationDatesOfIntegerAltDto | null): BaseDtoWithCreateAndModificationDatesOfIntegerAlt {
  return {
    createdOn: source?.CreatedOn ?? '',
    id: source?.Id ?? 0,
    lastModificationDate: source?.LastModificationDate ?? '',
  };
}
