import { ApiSaveResultOfIntegerAltDto } from '../../../swagger/models/api-save-result-of-integer';
import { SaveResultOfIntegerAlt } from '../../models/save-result-of-integer-alt.interface';

export const saveResultOfIntegerAltAdapter = (source?: ApiSaveResultOfIntegerAltDto | null): SaveResultOfIntegerAlt => {
  return {
    id: source?.ID,
    rowVersion: source?.RowVersion,
  };
}
