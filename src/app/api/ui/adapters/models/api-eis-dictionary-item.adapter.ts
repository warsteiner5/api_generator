import { EisDictionaryItemAlt } from '../../models/eis-dictionary-item-alt.interface';
import { ApiEisDictionaryItemAltDto } from '../../../swagger/models/api-eis-dictionary-item';

export const apiEisDictionaryItemAltDtoAdapter = (source?: EisDictionaryItemAlt | null): ApiEisDictionaryItemAltDto => {
  return {
    Code: source?.code,
    Name: source?.name,
  };
}
