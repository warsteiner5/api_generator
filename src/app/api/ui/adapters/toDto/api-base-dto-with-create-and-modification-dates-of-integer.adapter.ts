import { BaseDtoWithCreateAndModificationDatesOfIntegerAlt } from '../../models/base-dto-with-create-and-modification-dates-of-integer-alt.interface';
import { ApiBaseDtoWithCreateAndModificationDatesOfIntegerAltDto } from '../../../swagger/models/api-base-dto-with-create-and-modification-dates-of-integer';

export function adaptApiBaseDtoWithCreateAndModificationDatesOfIntegerAltDto(source?: BaseDtoWithCreateAndModificationDatesOfIntegerAlt | null): ApiBaseDtoWithCreateAndModificationDatesOfIntegerAltDto {
  return {
    CreatedOn: source?.createdOn,
    Id: source?.id,
    LastModificationDate: source?.lastModificationDate,
  };
}
