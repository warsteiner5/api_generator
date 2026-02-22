import { UpdatePropertyOfStringAlt } from '../../models/update-property-of-string-alt.interface';
import { ApiUpdatePropertyOfStringAltDto } from '../../../swagger/models/api-update-property-of-string';

export const apiUpdatePropertyOfStringAltDtoAdapter = (source?: UpdatePropertyOfStringAlt | null): ApiUpdatePropertyOfStringAltDto => {
  return {
    NeedUpdate: source?.needUpdate,
    Value: source?.value,
  };
}
