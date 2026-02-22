import { ApiGetExternalDealsInfoRequestAltDto } from '../../../swagger/models/api-get-external-deals-info-request';
import { GetExternalDealsInfoRequestAlt } from '../../models/get-external-deals-info-request-alt.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const getExternalDealsInfoRequestAltAdapter = (source?: ApiGetExternalDealsInfoRequestAltDto | null): GetExternalDealsInfoRequestAlt => {
  return {
    dealIds: source?.DealIds,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    externalSystemId: source?.ExternalSystemId,
  };
}
