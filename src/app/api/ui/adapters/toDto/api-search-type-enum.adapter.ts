import { SearchTypeEnum } from '../../enums/search-type.enum';
import { ApiSearchTypeEnum } from '../../../swagger/models/api-search-type-enum';

export function adaptApiSearchTypeEnum(source?: SearchTypeEnum | null): ApiSearchTypeEnum {
  switch (source) {
    case SearchTypeEnum.PriceList:
      return ApiSearchTypeEnum.PriceList;
    case SearchTypeEnum.Purchases:
      return ApiSearchTypeEnum.Purchases;
    default:
      throw new Error(`Enum value is not defined: SearchTypeEnum=${String(source)}`);
  }
}
