import { UpdatePropertyOfBooleanAlt } from '../../models/update-property-of-boolean-alt.interface';
import { ApiUpdatePropertyOfBooleanAltDto } from '../../../swagger/models/api-update-property-of-boolean';

export const apiUpdatePropertyOfBooleanAltDtoAdapter = (source?: UpdatePropertyOfBooleanAlt | null): ApiUpdatePropertyOfBooleanAltDto => {
  return {
    NeedUpdate: source?.needUpdate,
    Value: source?.value,
  };
}
