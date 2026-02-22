import { Restrictions } from '../../models/restrictions.interface';
import { ApiRestrictionsDto } from '../../../swagger/models/api-restrictions-dto';

export const apiRestrictionsDtoAdapter = (source?: Restrictions | null): ApiRestrictionsDto => {
  return {
    HiddenProperties: source?.hiddenProperties,
    ReadOnlyProperties: source?.readOnlyProperties,
  };
}
