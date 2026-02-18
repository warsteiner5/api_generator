import { ApiSortDirectionAltEnum } from '../../../swagger/models/api-sort-direction';
import { SortDirectionAltEnum } from '../../enums/sort-direction-alt.enum';

export function adaptSortDirectionAltEnumToUI(source?: ApiSortDirectionAltEnum | null): SortDirectionAltEnum {
  switch (source) {
    case ApiSortDirectionAltEnum.Ascending:
      return SortDirectionAltEnum.Ascending;
    case ApiSortDirectionAltEnum.Descending:
      return SortDirectionAltEnum.Descending;
    default:
      throw new Error(`Enum value is not defined: ApiSortDirectionAltEnum=${String(source)}`);
  }
}
