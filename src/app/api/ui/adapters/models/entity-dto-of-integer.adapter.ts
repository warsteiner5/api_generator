import { ApiEntityDtoOfInteger } from '../../../swagger/models/api-entity-dto-of-integer';
import { EntityDtoOfInteger } from '../../models/entity-dto-of-integer.interface';

export const entityDtoOfIntegerAdapter = (source?: ApiEntityDtoOfInteger | null): EntityDtoOfInteger => {
  return {
    id: source?.Id,
  };
}
