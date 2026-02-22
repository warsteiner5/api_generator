import { X500DistinguishedNameAlt } from '../../models/x-500-distinguished-name-alt.interface';
import { ApiX500DistinguishedNameAltDto } from '../../../swagger/models/api-x-500-distinguished-name';

export const apiX500DistinguishedNameAltDtoAdapter = (source?: X500DistinguishedNameAlt | null): ApiX500DistinguishedNameAltDto => {
  return (source ?? {}) as ApiX500DistinguishedNameAltDto;
}
