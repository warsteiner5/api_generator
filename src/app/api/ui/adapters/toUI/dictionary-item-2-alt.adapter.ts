import { ApiDictionaryItem2AltDto } from '../../../swagger/models/api-dictionary-item-2';
import { DictionaryItem2Alt } from '../../models/dictionary-item-2-alt.interface';

export function adaptDictionaryItem2AltToUI(source?: ApiDictionaryItem2AltDto | null): DictionaryItem2Alt {
  return {
    altCode: source?.AltCode ?? '',
    code: source?.Code ?? '',
    name: source?.Name ?? '',
  };
}
