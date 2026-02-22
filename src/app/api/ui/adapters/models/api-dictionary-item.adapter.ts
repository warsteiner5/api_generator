import { DictionaryItemAlt } from '../../models/dictionary-item-alt.interface';
import { ApiDictionaryItemAltDto } from '../../../swagger/models/api-dictionary-item';

export const apiDictionaryItemAltDtoAdapter = (source?: DictionaryItemAlt | null): ApiDictionaryItemAltDto => {
  return {
    AltCode: source?.altCode,
    Code: source?.code,
    Name: source?.name,
  };
}
