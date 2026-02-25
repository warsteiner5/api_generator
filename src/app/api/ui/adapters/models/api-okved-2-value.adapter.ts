import { Okved2ValueAlt } from '../../models/okved-2-value-alt.interface';
import { ApiOkved2ValueAltDto } from '../../../swagger/models/api-okved-2-value';
import { apiDictionaryValueAltDtoAdapter } from './api-dictionary-value.adapter';

export const apiOkved2ValueAltDtoAdapter = (source?: Okved2ValueAlt | null): ApiOkved2ValueAltDto => {
  return {
    ...apiDictionaryValueAltDtoAdapter(source as unknown as Parameters<typeof apiDictionaryValueAltDtoAdapter>[0]),
    Actual: source?.actual,
    Comment: source?.comment,
  };
}
