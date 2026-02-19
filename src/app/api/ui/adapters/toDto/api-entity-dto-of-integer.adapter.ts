import { EntityDtoOfInteger } from '../../models/entity-dto-of-integer.interface';
import { ApiEntityDtoOfInteger } from '../../../swagger/models/api-entity-dto-of-integer';

export function adaptApiEntityDtoOfInteger(source?: EntityDtoOfInteger | null): ApiEntityDtoOfInteger {
  return {
    Id: source?.id,
  };
}
