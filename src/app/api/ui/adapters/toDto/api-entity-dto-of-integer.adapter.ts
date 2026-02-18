import { EntityDtoOfIntegerAlt } from '../../models/entity-dto-of-integer-alt.interface';
import { ApiEntityDtoOfIntegerAltDto } from '../../../swagger/models/api-entity-dto-of-integer';

export function adaptApiEntityDtoOfIntegerAltDto(source?: EntityDtoOfIntegerAlt | null): ApiEntityDtoOfIntegerAltDto {
  return {
    Id: source?.id,
  };
}
