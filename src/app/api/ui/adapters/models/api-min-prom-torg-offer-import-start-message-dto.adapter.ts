import { MinPromTorgOfferImportStartMessage } from '../../models/min-prom-torg-offer-import-start-message.interface';
import { ApiMinPromTorgOfferImportStartMessageDto } from '../../../swagger/models/api-min-prom-torg-offer-import-start-message-dto';
import { apiExternalIntegrationParticipantOfferDtoAdapter } from './api-external-integration-participant-offer-dto.adapter';

export const apiMinPromTorgOfferImportStartMessageDtoAdapter = (source?: MinPromTorgOfferImportStartMessage | null): ApiMinPromTorgOfferImportStartMessageDto => {
  return {
    ImportTaskId: source?.importTaskId,
    Offers: source?.offers?.map((item) => apiExternalIntegrationParticipantOfferDtoAdapter(item)),
  };
}
