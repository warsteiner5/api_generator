import { ApiSearchResultTypeAltEnum } from '../../../swagger/models/api-search-result-type';
import { SearchResultTypeAltEnum } from '../../enums/search-result-type-alt.enum';

export const searchResultTypeAltEnumAdapter = (source?: ApiSearchResultTypeAltEnum | null): SearchResultTypeAltEnum => {
  switch (source) {
    case ApiSearchResultTypeAltEnum.Default:
      return SearchResultTypeAltEnum.Default;
    case ApiSearchResultTypeAltEnum.BySettings:
      return SearchResultTypeAltEnum.BySettings;
    default:
      throw new Error(`Enum value is not defined: ApiSearchResultTypeAltEnum=${String(source)}`);
  }
}
