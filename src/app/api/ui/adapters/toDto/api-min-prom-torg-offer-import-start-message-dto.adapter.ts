import { MinPromTorgOfferImportStartMessage } from '../../models/min-prom-torg-offer-import-start-message.interface';
import { ApiMinPromTorgOfferImportStartMessageDto } from '../../../swagger/models/api-min-prom-torg-offer-import-start-message-dto';
import { adaptApiExternalIntegrationParticipantOfferDto } from './api-external-integration-participant-offer-dto.adapter';

export function adaptApiMinPromTorgOfferImportStartMessageDto(source?: MinPromTorgOfferImportStartMessage | null): ApiMinPromTorgOfferImportStartMessageDto {
  return {
    ImportTaskId: source?.importTaskId,
    Offers: (source?.offers ?? []).map((item) => adaptApiExternalIntegrationParticipantOfferDto(item)),
  };
}
