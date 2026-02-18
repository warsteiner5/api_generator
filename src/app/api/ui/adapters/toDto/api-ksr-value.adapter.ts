import { KsrValueAlt } from '../../models/ksr-value-alt.interface';
import { ApiKsrValueAltDto } from '../../../swagger/models/api-ksr-value';

export function adaptApiKsrValueAltDto(source?: KsrValueAlt | null): ApiKsrValueAltDto {
  return (source ?? {}) as ApiKsrValueAltDto;
}
