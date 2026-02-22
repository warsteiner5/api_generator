import { SortDirectionAltEnum } from '../../enums/sort-direction-alt.enum';
import { ApiSortDirectionAltEnum } from '../../../swagger/models/api-sort-direction';

export const apiSortDirectionAltEnumAdapter = (source?: SortDirectionAltEnum | null): ApiSortDirectionAltEnum => {
  switch (source) {
    case SortDirectionAltEnum.Ascending:
      return ApiSortDirectionAltEnum.Ascending;
    case SortDirectionAltEnum.Descending:
      return ApiSortDirectionAltEnum.Descending;
    default:
      throw new Error(`Enum value is not defined: SortDirectionAltEnum=${String(source)}`);
  }
}
