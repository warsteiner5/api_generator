import { SaveResultOfIntegerAlt } from '../../models/save-result-of-integer-alt.interface';
import { ApiSaveResultOfIntegerAltDto } from '../../../swagger/models/api-save-result-of-integer';

export const apiSaveResultOfIntegerAltDtoAdapter = (source?: SaveResultOfIntegerAlt | null): ApiSaveResultOfIntegerAltDto => {
  return {
    ID: source?.id,
    RowVersion: source?.rowVersion,
  };
}
