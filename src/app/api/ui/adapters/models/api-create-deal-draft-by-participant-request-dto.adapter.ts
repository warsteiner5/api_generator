import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';
import { ApiCreateDealDraftByParticipantRequestDto } from '../../../swagger/models/api-create-deal-draft-by-participant-request-dto';

export const apiCreateDealDraftByParticipantRequestDtoAdapter = (source?: CreateDealDraftByParticipantRequest | null): ApiCreateDealDraftByParticipantRequestDto => {
  return {
    ApplicationId: source?.applicationId,
    ApplicationLotItemIds: source?.applicationLotItemIds,
    ChatId: source?.chatId,
    ContractExecutionDate: source?.contractExecutionDate,
    ContractGuaranteeRequired: source?.contractGuaranteeRequired,
    ContractPrice: source?.contractPrice,
    CustomDealNumber: source?.customDealNumber,
    EnableDealDraftCreationWithoutAttachedDocuments: source?.enableDealDraftCreationWithoutAttachedDocuments,
    FileGuids: source?.fileGuids,
    LotId: source?.lotId,
  };
}
