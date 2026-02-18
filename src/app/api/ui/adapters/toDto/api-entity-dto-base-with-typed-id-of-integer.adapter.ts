import { EntityDtoBaseWithTypedIdOfIntegerAlt } from '../../models/entity-dto-base-with-typed-id-of-integer-alt.interface';
import { ApiEntityDtoBaseWithTypedIdOfIntegerAltDto } from '../../../swagger/models/api-entity-dto-base-with-typed-id-of-integer';

export function adaptApiEntityDtoBaseWithTypedIdOfIntegerAltDto(source?: EntityDtoBaseWithTypedIdOfIntegerAlt | null): ApiEntityDtoBaseWithTypedIdOfIntegerAltDto {
  return {
    ID: source?.id,
    RowVersion: source?.rowVersion,
  };
}
