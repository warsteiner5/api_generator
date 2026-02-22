import { EntityDtoBase } from '../../models/entity-dto-base.interface';
import { ApiEntityDtoBase } from '../../../swagger/models/api-entity-dto-base';

export const apiEntityDtoBaseAdapter = (source?: EntityDtoBase | null): ApiEntityDtoBase => {
  return (source ?? {}) as ApiEntityDtoBase;
}
