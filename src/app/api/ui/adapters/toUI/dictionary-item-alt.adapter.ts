import { ApiDictionaryItemAltDto } from '../../../swagger/models/api-dictionary-item';
import { DictionaryItemAlt } from '../../models/dictionary-item-alt.interface';

export function adaptDictionaryItemAltToUI(source?: ApiDictionaryItemAltDto | null): DictionaryItemAlt {
  return {
    altCode: source?.AltCode ?? '',
    code: source?.Code ?? '',
    name: source?.Name ?? '',
  };
}
