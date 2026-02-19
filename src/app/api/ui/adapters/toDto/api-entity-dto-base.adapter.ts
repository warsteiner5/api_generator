import { EntityDtoBase } from '../../models/entity-dto-base.interface';
import { ApiEntityDtoBase } from '../../../swagger/models/api-entity-dto-base';

export function adaptApiEntityDtoBase(source?: EntityDtoBase | null): ApiEntityDtoBase {
  return (source ?? {}) as ApiEntityDtoBase;
}
