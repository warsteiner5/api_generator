import { ApiEntityDtoBase } from '../../../swagger/models/api-entity-dto-base';
import { EntityDtoBase } from '../../models/entity-dto-base.interface';

export const entityDtoBaseAdapter = (source?: ApiEntityDtoBase | null): EntityDtoBase => {
  return (source ?? {}) as EntityDtoBase;
}
