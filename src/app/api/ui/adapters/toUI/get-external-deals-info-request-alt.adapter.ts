import { ApiGetExternalDealsInfoRequestAltDto } from '../../../swagger/models/api-get-external-deals-info-request';
import { GetExternalDealsInfoRequestAlt } from '../../models/get-external-deals-info-request-alt.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptGetExternalDealsInfoRequestAltToUI(source?: ApiGetExternalDealsInfoRequestAltDto | null): GetExternalDealsInfoRequestAlt {
  return {
    dealIds: source?.DealIds ?? [],
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    externalSystemId: source?.ExternalSystemId ?? 0,
  };
}
