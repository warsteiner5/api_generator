import { ApiKsrValueAltDto } from '../../../swagger/models/api-ksr-value';
import { KsrValueAlt } from '../../models/ksr-value-alt.interface';

export const ksrValueAltAdapter = (source?: ApiKsrValueAltDto | null): KsrValueAlt => {
  return (source ?? {}) as KsrValueAlt;
}
