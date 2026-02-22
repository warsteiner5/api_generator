import { ApiCreateDealDraftByParticipantRequestDto } from '../../../swagger/models/api-create-deal-draft-by-participant-request-dto';
import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';

export const createDealDraftByParticipantRequestAdapter = (source?: ApiCreateDealDraftByParticipantRequestDto | null): CreateDealDraftByParticipantRequest => {
  return {
    applicationId: source?.ApplicationId,
    applicationLotItemIds: source?.ApplicationLotItemIds,
    chatId: source?.ChatId,
    contractExecutionDate: source?.ContractExecutionDate,
    contractGuaranteeRequired: source?.ContractGuaranteeRequired,
    contractPrice: source?.ContractPrice,
    customDealNumber: source?.CustomDealNumber,
    enableDealDraftCreationWithoutAttachedDocuments: source?.EnableDealDraftCreationWithoutAttachedDocuments,
    fileGuids: source?.FileGuids,
    lotId: source?.LotId,
  };
}
