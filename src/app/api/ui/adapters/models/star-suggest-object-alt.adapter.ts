import { ApiStarSuggestObjectAltDto } from '../../../swagger/models/api-star-suggest-object';
import { StarSuggestObjectAlt } from '../../models/star-suggest-object-alt.interface';

export const starSuggestObjectAltAdapter = (source?: ApiStarSuggestObjectAltDto | null): StarSuggestObjectAlt => {
  return {
    id: source?.Id,
    label: source?.Label,
    value: source?.Value,
  };
}
