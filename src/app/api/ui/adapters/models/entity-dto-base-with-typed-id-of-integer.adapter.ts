import { ApiEntityDtoBaseWithTypedIdOfInteger } from '../../../swagger/models/api-entity-dto-base-with-typed-id-of-integer';
import { EntityDtoBaseWithTypedIdOfInteger } from '../../models/entity-dto-base-with-typed-id-of-integer.interface';

export const entityDtoBaseWithTypedIdOfIntegerAdapter = (source?: ApiEntityDtoBaseWithTypedIdOfInteger | null): EntityDtoBaseWithTypedIdOfInteger => {
  return {
    id: source?.ID,
    rowVersion: source?.RowVersion,
  };
}
