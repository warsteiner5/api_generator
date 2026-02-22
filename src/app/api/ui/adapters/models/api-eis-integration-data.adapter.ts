import { EisIntegrationDataAlt } from '../../models/eis-integration-data-alt.interface';
import { ApiEisIntegrationDataAltDto } from '../../../swagger/models/api-eis-integration-data';

export const apiEisIntegrationDataAltDtoAdapter = (source?: EisIntegrationDataAlt | null): ApiEisIntegrationDataAltDto => {
  return {
    DealNumber: source?.dealNumber,
    DealUrl: source?.dealUrl,
    LotUniqueId: source?.lotUniqueId,
    NotificationNumber: source?.notificationNumber,
    ProtocolNumber: source?.protocolNumber,
    ProtocolUrl: source?.protocolUrl,
    UniqueId: source?.uniqueId,
    Url: source?.url,
  };
}
