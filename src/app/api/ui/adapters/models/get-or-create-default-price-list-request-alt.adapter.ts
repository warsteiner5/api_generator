import { ApiGetOrCreateDefaultPriceListRequestAltDto } from '../../../swagger/models/api-get-or-create-default-price-list-request';
import { GetOrCreateDefaultPriceListRequestAlt } from '../../models/get-or-create-default-price-list-request-alt.interface';

export const getOrCreateDefaultPriceListRequestAltAdapter = (source?: ApiGetOrCreateDefaultPriceListRequestAltDto | null): GetOrCreateDefaultPriceListRequestAlt => {
  return {
    name: source?.Name,
    organizationId: source?.OrganizationId,
    tenantId: source?.TenantId,
  };
}
