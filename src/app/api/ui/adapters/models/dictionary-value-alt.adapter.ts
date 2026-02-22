import { ApiDictionaryValueAltDto } from '../../../swagger/models/api-dictionary-value';
import { DictionaryValueAlt } from '../../models/dictionary-value-alt.interface';

export const dictionaryValueAltAdapter = (source?: ApiDictionaryValueAltDto | null): DictionaryValueAlt => {
  return {
    code: source?.Code,
    description: source?.Description,
    hasChild: source?.HasChild,
    parentCode: source?.ParentCode,
  };
}
