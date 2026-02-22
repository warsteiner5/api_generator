import { ApiDealEisIntegrationDataAltDto } from '../../../swagger/models/api-deal-eis-integration-data';
import { DealEisIntegrationDataAlt } from '../../models/deal-eis-integration-data-alt.interface';

export const dealEisIntegrationDataAltAdapter = (source?: ApiDealEisIntegrationDataAltDto | null): DealEisIntegrationDataAlt => {
  return {
    dealNumber: source?.DealNumber,
    dealUrl: source?.DealUrl,
  };
}
