import { ApiMinPromTorgOfferImportStartMessageDto } from '../../../swagger/models/api-min-prom-torg-offer-import-start-message-dto';
import { MinPromTorgOfferImportStartMessage } from '../../models/min-prom-torg-offer-import-start-message.interface';
import { externalIntegrationParticipantOfferAdapter } from './external-integration-participant-offer.adapter';

export const minPromTorgOfferImportStartMessageAdapter = (source?: ApiMinPromTorgOfferImportStartMessageDto | null): MinPromTorgOfferImportStartMessage => {
  return {
    importTaskId: source?.ImportTaskId,
    offers: source?.Offers?.map((item) => externalIntegrationParticipantOfferAdapter(item)),
  };
}
