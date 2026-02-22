import { ApiDictionaryItemAltDto } from '../../../swagger/models/api-dictionary-item';
import { DictionaryItemAlt } from '../../models/dictionary-item-alt.interface';

export const dictionaryItemAltAdapter = (source?: ApiDictionaryItemAltDto | null): DictionaryItemAlt => {
  return {
    altCode: source?.AltCode,
    code: source?.Code,
    name: source?.Name,
  };
}
