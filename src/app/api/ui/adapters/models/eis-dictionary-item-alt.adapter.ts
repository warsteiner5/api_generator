import { ApiEisDictionaryItemAltDto } from '../../../swagger/models/api-eis-dictionary-item';
import { EisDictionaryItemAlt } from '../../models/eis-dictionary-item-alt.interface';

export const eisDictionaryItemAltAdapter = (source?: ApiEisDictionaryItemAltDto | null): EisDictionaryItemAlt => {
  return {
    code: source?.Code,
    name: source?.Name,
  };
}
