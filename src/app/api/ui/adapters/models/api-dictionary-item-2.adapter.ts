import { DictionaryItem2Alt } from '../../models/dictionary-item-2-alt.interface';
import { ApiDictionaryItem2AltDto } from '../../../swagger/models/api-dictionary-item-2';

export const apiDictionaryItem2AltDtoAdapter = (source?: DictionaryItem2Alt | null): ApiDictionaryItem2AltDto => {
  return {
    AltCode: source?.altCode,
    Code: source?.code,
    Name: source?.name,
  };
}
