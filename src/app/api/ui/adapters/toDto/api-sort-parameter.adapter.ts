import { SortParameterAlt } from '../../models/sort-parameter-alt.interface';
import { ApiSortParameterAltDto } from '../../../swagger/models/api-sort-parameter';
import { adaptApiSortDirectionAltEnum } from './api-sort-direction.adapter';

export function adaptApiSortParameterAltDto(source?: SortParameterAlt | null): ApiSortParameterAltDto {
  return {
    Direction: adaptApiSortDirectionAltEnum(source?.direction),
    Property: source?.property,
  };
}
