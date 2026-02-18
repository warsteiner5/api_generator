import { EisDictionaryItemAlt } from '../../models/eis-dictionary-item-alt.interface';
import { ApiEisDictionaryItemAltDto } from '../../../swagger/models/api-eis-dictionary-item';

export function adaptApiEisDictionaryItemAltDto(source?: EisDictionaryItemAlt | null): ApiEisDictionaryItemAltDto {
  return {
    Code: source?.code,
    Name: source?.name,
  };
}
