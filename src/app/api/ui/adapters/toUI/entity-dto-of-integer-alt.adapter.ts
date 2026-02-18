import { ApiEntityDtoOfIntegerAltDto } from '../../../swagger/models/api-entity-dto-of-integer';
import { EntityDtoOfIntegerAlt } from '../../models/entity-dto-of-integer-alt.interface';

export function adaptEntityDtoOfIntegerAltToUI(source?: ApiEntityDtoOfIntegerAltDto | null): EntityDtoOfIntegerAlt {
  return {
    id: source?.Id ?? 0,
  };
}
