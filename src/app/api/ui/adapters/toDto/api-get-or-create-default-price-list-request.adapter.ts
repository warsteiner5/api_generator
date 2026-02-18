import { GetOrCreateDefaultPriceListRequestAlt } from '../../models/get-or-create-default-price-list-request-alt.interface';
import { ApiGetOrCreateDefaultPriceListRequestAltDto } from '../../../swagger/models/api-get-or-create-default-price-list-request';

export function adaptApiGetOrCreateDefaultPriceListRequestAltDto(source?: GetOrCreateDefaultPriceListRequestAlt | null): ApiGetOrCreateDefaultPriceListRequestAltDto {
  return {
    Name: source?.name,
    OrganizationId: source?.organizationId,
    TenantId: source?.tenantId,
  };
}
