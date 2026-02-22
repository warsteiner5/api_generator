import { GetExternalDealsInfoRequestAlt } from '../../models/get-external-deals-info-request-alt.interface';
import { ApiGetExternalDealsInfoRequestAltDto } from '../../../swagger/models/api-get-external-deals-info-request';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiGetExternalDealsInfoRequestAltDtoAdapter = (source?: GetExternalDealsInfoRequestAlt | null): ApiGetExternalDealsInfoRequestAltDto => {
  return {
    DealIds: source?.dealIds,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    ExternalSystemId: source?.externalSystemId,
  };
}
