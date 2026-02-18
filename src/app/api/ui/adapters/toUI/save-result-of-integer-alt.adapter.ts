import { ApiSaveResultOfIntegerAltDto } from '../../../swagger/models/api-save-result-of-integer';
import { SaveResultOfIntegerAlt } from '../../models/save-result-of-integer-alt.interface';

export function adaptSaveResultOfIntegerAltToUI(source?: ApiSaveResultOfIntegerAltDto | null): SaveResultOfIntegerAlt {
  return {
    id: source?.ID ?? 0,
    rowVersion: source?.RowVersion ?? 0,
  };
}
