import { EntityDtoBaseWithTypedIdOfInteger } from '../../models/entity-dto-base-with-typed-id-of-integer.interface';
import { ApiEntityDtoBaseWithTypedIdOfInteger } from '../../../swagger/models/api-entity-dto-base-with-typed-id-of-integer';

export const apiEntityDtoBaseWithTypedIdOfIntegerAdapter = (source?: EntityDtoBaseWithTypedIdOfInteger | null): ApiEntityDtoBaseWithTypedIdOfInteger => {
  return {
    ID: source?.id,
    RowVersion: source?.rowVersion,
  };
}
