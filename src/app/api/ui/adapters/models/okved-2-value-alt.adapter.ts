import { ApiOkved2ValueAltDto } from '../../../swagger/models/api-okved-2-value';
import { Okved2ValueAlt } from '../../models/okved-2-value-alt.interface';
import { dictionaryValueAltAdapter } from './dictionary-value-alt.adapter';

export const okved2ValueAltAdapter = (source?: ApiOkved2ValueAltDto | null): Okved2ValueAlt => {
  return {
    ...dictionaryValueAltAdapter(source as unknown as Parameters<typeof dictionaryValueAltAdapter>[0]),
    actual: source?.Actual,
    comment: source?.Comment,
  };
}
