import { Okved2ValueAlt } from '../../models/okved-2-value-alt.interface';
import { ApiOkved2ValueAltDto } from '../../../swagger/models/api-okved-2-value';

export function adaptApiOkved2ValueAltDto(source?: Okved2ValueAlt | null): ApiOkved2ValueAltDto {
  return (source ?? {}) as ApiOkved2ValueAltDto;
}
