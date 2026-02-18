import { ApiEisIntegrationDataAltDto } from '../../../swagger/models/api-eis-integration-data';
import { EisIntegrationDataAlt } from '../../models/eis-integration-data-alt.interface';

export function adaptEisIntegrationDataAltToUI(source?: ApiEisIntegrationDataAltDto | null): EisIntegrationDataAlt {
  return {
    dealNumber: source?.DealNumber ?? '',
    dealUrl: source?.DealUrl ?? '',
    lotUniqueId: source?.LotUniqueId ?? '',
    notificationNumber: source?.NotificationNumber ?? '',
    protocolNumber: source?.ProtocolNumber ?? '',
    protocolUrl: source?.ProtocolUrl ?? '',
    uniqueId: source?.UniqueId ?? '',
    url: source?.Url ?? '',
  };
}
