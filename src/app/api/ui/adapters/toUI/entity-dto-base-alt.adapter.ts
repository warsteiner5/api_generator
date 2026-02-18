import { ApiEntityDtoBaseAltDto } from '../../../swagger/models/api-entity-dto-base';
import { EntityDtoBaseAlt } from '../../models/entity-dto-base-alt.interface';

export function adaptEntityDtoBaseAltToUI(source?: ApiEntityDtoBaseAltDto | null): EntityDtoBaseAlt {
  return (source ?? {}) as EntityDtoBaseAlt;
}
