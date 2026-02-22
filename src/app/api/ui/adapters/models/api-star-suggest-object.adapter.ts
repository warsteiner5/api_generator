import { StarSuggestObjectAlt } from '../../models/star-suggest-object-alt.interface';
import { ApiStarSuggestObjectAltDto } from '../../../swagger/models/api-star-suggest-object';

export const apiStarSuggestObjectAltDtoAdapter = (source?: StarSuggestObjectAlt | null): ApiStarSuggestObjectAltDto => {
  return {
    Id: source?.id,
    Label: source?.label,
    Value: source?.value,
  };
}
