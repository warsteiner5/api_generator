import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { ApiExternalDealFilterObjectAltDto } from '../../../swagger/models/api-external-deal-filter-object';

export const apiExternalDealFilterObjectAltDtoAdapter = (source?: ExternalDealFilterObjectAlt | null): ApiExternalDealFilterObjectAltDto => {
  return (source ?? {}) as ApiExternalDealFilterObjectAltDto;
}
