import { ApiDictionaryValueAltDto } from '../../../swagger/models/api-dictionary-value';
import { DictionaryValueAlt } from '../../models/dictionary-value-alt.interface';

export function adaptDictionaryValueAltToUI(source?: ApiDictionaryValueAltDto | null): DictionaryValueAlt {
  return {
    code: source?.Code ?? '',
    description: source?.Description ?? '',
    hasChild: source?.HasChild ?? false,
    parentCode: source?.ParentCode ?? '',
  };
}
