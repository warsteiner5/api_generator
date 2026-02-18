import { EntityDtoBaseAlt } from '../../models/entity-dto-base-alt.interface';
import { ApiEntityDtoBaseAltDto } from '../../../swagger/models/api-entity-dto-base';

export function adaptApiEntityDtoBaseAltDto(source?: EntityDtoBaseAlt | null): ApiEntityDtoBaseAltDto {
  return (source ?? {}) as ApiEntityDtoBaseAltDto;
}
