import { SortParameterAlt } from '../../models/sort-parameter-alt.interface';
import { ApiSortParameterAltDto } from '../../../swagger/models/api-sort-parameter';
import { apiSortDirectionAltEnumAdapter } from '../enums/api-sort-direction.adapter';

export const apiSortParameterAltDtoAdapter = (source?: SortParameterAlt | null): ApiSortParameterAltDto => {
  return {
    Direction: source?.direction === null ? undefined : apiSortDirectionAltEnumAdapter(source?.direction),
    Property: source?.property,
  };
}
