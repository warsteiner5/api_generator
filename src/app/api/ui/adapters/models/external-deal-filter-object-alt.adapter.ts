import { ApiExternalDealFilterObjectAltDto } from '../../../swagger/models/api-external-deal-filter-object';
import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';

export const externalDealFilterObjectAltAdapter = (source?: ApiExternalDealFilterObjectAltDto | null): ExternalDealFilterObjectAlt => {
  return (source ?? {}) as ExternalDealFilterObjectAlt;
}
