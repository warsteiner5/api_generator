import { DictionaryValueAlt } from '../../models/dictionary-value-alt.interface';
import { ApiDictionaryValueAltDto } from '../../../swagger/models/api-dictionary-value';

export function adaptApiDictionaryValueAltDto(source?: DictionaryValueAlt | null): ApiDictionaryValueAltDto {
  return {
    Code: source?.code,
    Description: source?.description,
    HasChild: source?.hasChild,
    ParentCode: source?.parentCode,
  };
}
