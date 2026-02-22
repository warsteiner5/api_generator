import { UpdatePropertyOfStringOfAlt } from '../../models/update-property-of-string-of-alt.interface';
import { ApiUpdatePropertyOfStringOfAltDto } from '../../../swagger/models/api-update-property-of-string-of';

export const apiUpdatePropertyOfStringOfAltDtoAdapter = (source?: UpdatePropertyOfStringOfAlt | null): ApiUpdatePropertyOfStringOfAltDto => {
  return {
    NeedUpdate: source?.needUpdate,
    Value: source?.value,
  };
}
