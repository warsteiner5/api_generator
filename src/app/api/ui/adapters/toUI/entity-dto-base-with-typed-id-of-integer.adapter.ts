import { ApiEntityDtoBaseWithTypedIdOfInteger } from '../../../swagger/models/api-entity-dto-base-with-typed-id-of-integer';
import { EntityDtoBaseWithTypedIdOfInteger } from '../../models/entity-dto-base-with-typed-id-of-integer.interface';

export function adaptEntityDtoBaseWithTypedIdOfIntegerToUI(source?: ApiEntityDtoBaseWithTypedIdOfInteger | null): EntityDtoBaseWithTypedIdOfInteger {
  return {
    id: source?.ID ?? 0,
    rowVersion: source?.RowVersion ?? 0,
  };
}
