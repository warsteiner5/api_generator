import { ApiEntityDtoBaseWithTypedIdOfIntegerAltDto } from '../../../swagger/models/api-entity-dto-base-with-typed-id-of-integer';
import { EntityDtoBaseWithTypedIdOfIntegerAlt } from '../../models/entity-dto-base-with-typed-id-of-integer-alt.interface';

export function adaptEntityDtoBaseWithTypedIdOfIntegerAltToUI(source?: ApiEntityDtoBaseWithTypedIdOfIntegerAltDto | null): EntityDtoBaseWithTypedIdOfIntegerAlt {
  return {
    id: source?.ID ?? 0,
    rowVersion: source?.RowVersion ?? 0,
  };
}
