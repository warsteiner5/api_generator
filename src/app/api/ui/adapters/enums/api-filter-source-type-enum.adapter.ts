import { FilterSourceTypeEnum } from '../../enums/filter-source-type.enum';
import { ApiFilterSourceTypeEnum } from '../../../swagger/models/api-filter-source-type-enum';

export const apiFilterSourceTypeEnumAdapter = (source?: FilterSourceTypeEnum | null): ApiFilterSourceTypeEnum => {
  switch (source) {
    case FilterSourceTypeEnum.LandingSearch:
      return ApiFilterSourceTypeEnum.LandingSearch;
    case FilterSourceTypeEnum.QueryString:
      return ApiFilterSourceTypeEnum.QueryString;
    case FilterSourceTypeEnum.Guid:
      return ApiFilterSourceTypeEnum.Guid;
    case FilterSourceTypeEnum.MainSearch:
      return ApiFilterSourceTypeEnum.MainSearch;
    case FilterSourceTypeEnum.ExtendedSearch:
      return ApiFilterSourceTypeEnum.ExtendedSearch;
    case FilterSourceTypeEnum.AsideSearch:
      return ApiFilterSourceTypeEnum.AsideSearch;
    case FilterSourceTypeEnum.Pomogator:
      return ApiFilterSourceTypeEnum.Pomogator;
    default:
      throw new Error(`Enum value is not defined: FilterSourceTypeEnum=${String(source)}`);
  }
}
