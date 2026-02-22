import { ApiFilterSourceTypeEnum } from '../../../swagger/models/api-filter-source-type-enum';
import { FilterSourceTypeEnum } from '../../enums/filter-source-type.enum';

export const filterSourceTypeEnumAdapter = (source?: ApiFilterSourceTypeEnum | null): FilterSourceTypeEnum => {
  switch (source) {
    case ApiFilterSourceTypeEnum.LandingSearch:
      return FilterSourceTypeEnum.LandingSearch;
    case ApiFilterSourceTypeEnum.QueryString:
      return FilterSourceTypeEnum.QueryString;
    case ApiFilterSourceTypeEnum.Guid:
      return FilterSourceTypeEnum.Guid;
    case ApiFilterSourceTypeEnum.MainSearch:
      return FilterSourceTypeEnum.MainSearch;
    case ApiFilterSourceTypeEnum.ExtendedSearch:
      return FilterSourceTypeEnum.ExtendedSearch;
    case ApiFilterSourceTypeEnum.AsideSearch:
      return FilterSourceTypeEnum.AsideSearch;
    case ApiFilterSourceTypeEnum.Pomogator:
      return FilterSourceTypeEnum.Pomogator;
    default:
      throw new Error(`Enum value is not defined: ApiFilterSourceTypeEnum=${String(source)}`);
  }
}
