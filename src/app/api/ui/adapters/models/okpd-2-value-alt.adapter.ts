import { ApiOkpd2ValueAltDto } from '../../../swagger/models/api-okpd-2-value';
import { Okpd2ValueAlt } from '../../models/okpd-2-value-alt.interface';

export const okpd2ValueAltAdapter = (source?: ApiOkpd2ValueAltDto | null): Okpd2ValueAlt => {
  return (source ?? {}) as Okpd2ValueAlt;
}
