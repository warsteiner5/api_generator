import { ApiOkved2ValueAltDto } from '../../../swagger/models/api-okved-2-value';
import { Okved2ValueAlt } from '../../models/okved-2-value-alt.interface';

export const okved2ValueAltAdapter = (source?: ApiOkved2ValueAltDto | null): Okved2ValueAlt => {
  return (source ?? {}) as Okved2ValueAlt;
}
