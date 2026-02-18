import { DealEisIntegrationDataAlt } from '../../models/deal-eis-integration-data-alt.interface';
import { ApiDealEisIntegrationDataAltDto } from '../../../swagger/models/api-deal-eis-integration-data';

export function adaptApiDealEisIntegrationDataAltDto(source?: DealEisIntegrationDataAlt | null): ApiDealEisIntegrationDataAltDto {
  return {
    DealNumber: source?.dealNumber,
    DealUrl: source?.dealUrl,
  };
}
