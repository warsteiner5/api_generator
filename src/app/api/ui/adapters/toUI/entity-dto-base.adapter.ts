import { ApiEntityDtoBase } from '../../../swagger/models/api-entity-dto-base';
import { EntityDtoBase } from '../../models/entity-dto-base.interface';

export function adaptEntityDtoBaseToUI(source?: ApiEntityDtoBase | null): EntityDtoBase {
  return (source ?? {}) as EntityDtoBase;
}
