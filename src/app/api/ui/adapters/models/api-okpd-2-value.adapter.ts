import { Okpd2ValueAlt } from '../../models/okpd-2-value-alt.interface';
import { ApiOkpd2ValueAltDto } from '../../../swagger/models/api-okpd-2-value';
import { apiDictionaryValueAltDtoAdapter } from './api-dictionary-value.adapter';

export const apiOkpd2ValueAltDtoAdapter = (source?: Okpd2ValueAlt | null): ApiOkpd2ValueAltDto => {
  return {
    ...apiDictionaryValueAltDtoAdapter(source as unknown as Parameters<typeof apiDictionaryValueAltDtoAdapter>[0]),
    Actual: source?.actual,
    Comment: source?.comment,
  };
}
