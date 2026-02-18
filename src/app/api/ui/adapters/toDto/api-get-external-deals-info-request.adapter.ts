import { GetExternalDealsInfoRequestAlt } from '../../models/get-external-deals-info-request-alt.interface';
import { ApiGetExternalDealsInfoRequestAltDto } from '../../../swagger/models/api-get-external-deals-info-request';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiGetExternalDealsInfoRequestAltDto(source?: GetExternalDealsInfoRequestAlt | null): ApiGetExternalDealsInfoRequestAltDto {
  return {
    DealIds: source?.dealIds ?? [],
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    ExternalSystemId: source?.externalSystemId,
  };
}
