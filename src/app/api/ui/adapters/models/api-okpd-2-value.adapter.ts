import { Okpd2ValueAlt } from '../../models/okpd-2-value-alt.interface';
import { ApiOkpd2ValueAltDto } from '../../../swagger/models/api-okpd-2-value';

export const apiOkpd2ValueAltDtoAdapter = (source?: Okpd2ValueAlt | null): ApiOkpd2ValueAltDto => {
  return (source ?? {}) as ApiOkpd2ValueAltDto;
}
