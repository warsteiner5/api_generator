import { ApiMinPromTorgOfferImportStartMessageDto } from '../../../swagger/models/api-min-prom-torg-offer-import-start-message-dto';
import { MinPromTorgOfferImportStartMessage } from '../../models/min-prom-torg-offer-import-start-message.interface';
import { adaptExternalIntegrationParticipantOfferToUI } from './external-integration-participant-offer.adapter';

export function adaptMinPromTorgOfferImportStartMessageToUI(source?: ApiMinPromTorgOfferImportStartMessageDto | null): MinPromTorgOfferImportStartMessage {
  return {
    importTaskId: source?.ImportTaskId ?? 0,
    offers: (source?.Offers ?? []).map((item) => adaptExternalIntegrationParticipantOfferToUI(item)),
  };
}
