import { ApiEntityDtoOfInteger } from '../../../swagger/models/api-entity-dto-of-integer';
import { EntityDtoOfInteger } from '../../models/entity-dto-of-integer.interface';

export function adaptEntityDtoOfIntegerToUI(source?: ApiEntityDtoOfInteger | null): EntityDtoOfInteger {
  return {
    id: source?.Id ?? 0,
  };
}
