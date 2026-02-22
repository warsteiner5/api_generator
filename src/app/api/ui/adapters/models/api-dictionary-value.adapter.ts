import { DictionaryValueAlt } from '../../models/dictionary-value-alt.interface';
import { ApiDictionaryValueAltDto } from '../../../swagger/models/api-dictionary-value';

export const apiDictionaryValueAltDtoAdapter = (source?: DictionaryValueAlt | null): ApiDictionaryValueAltDto => {
  return {
    Code: source?.code,
    Description: source?.description,
    HasChild: source?.hasChild,
    ParentCode: source?.parentCode,
  };
}
