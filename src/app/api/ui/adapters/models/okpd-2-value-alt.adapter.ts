import { ApiOkpd2ValueAltDto } from '../../../swagger/models/api-okpd-2-value';
import { Okpd2ValueAlt } from '../../models/okpd-2-value-alt.interface';
import { dictionaryValueAltAdapter } from './dictionary-value-alt.adapter';

export const okpd2ValueAltAdapter = (source?: ApiOkpd2ValueAltDto | null): Okpd2ValueAlt => {
  return {
    ...dictionaryValueAltAdapter(source as unknown as Parameters<typeof dictionaryValueAltAdapter>[0]),
    actual: source?.Actual,
    comment: source?.Comment,
  };
}
