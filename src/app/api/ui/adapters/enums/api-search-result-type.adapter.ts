import { SearchResultTypeAltEnum } from '../../enums/search-result-type-alt.enum';
import { ApiSearchResultTypeAltEnum } from '../../../swagger/models/api-search-result-type';

export const apiSearchResultTypeAltEnumAdapter = (source?: SearchResultTypeAltEnum | null): ApiSearchResultTypeAltEnum => {
  switch (source) {
    case SearchResultTypeAltEnum.Default:
      return ApiSearchResultTypeAltEnum.Default;
    case SearchResultTypeAltEnum.BySettings:
      return ApiSearchResultTypeAltEnum.BySettings;
    default:
      throw new Error(`Enum value is not defined: SearchResultTypeAltEnum=${String(source)}`);
  }
}
