import { ApiSearchTypeEnum } from '../../../swagger/models/api-search-type-enum';
import { SearchTypeEnum } from '../../enums/search-type.enum';

export const searchTypeEnumAdapter = (source?: ApiSearchTypeEnum | null): SearchTypeEnum => {
  switch (source) {
    case ApiSearchTypeEnum.PriceList:
      return SearchTypeEnum.PriceList;
    case ApiSearchTypeEnum.Purchases:
      return SearchTypeEnum.Purchases;
    default:
      throw new Error(`Enum value is not defined: ApiSearchTypeEnum=${String(source)}`);
  }
}
