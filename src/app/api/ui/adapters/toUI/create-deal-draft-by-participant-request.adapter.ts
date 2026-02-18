import { ApiCreateDealDraftByParticipantRequestDto } from '../../../swagger/models/api-create-deal-draft-by-participant-request-dto';
import { CreateDealDraftByParticipantRequest } from '../../models/create-deal-draft-by-participant-request.interface';

export function adaptCreateDealDraftByParticipantRequestToUI(source?: ApiCreateDealDraftByParticipantRequestDto | null): CreateDealDraftByParticipantRequest {
  return {
    applicationId: source?.ApplicationId ?? 0,
    applicationLotItemIds: source?.ApplicationLotItemIds ?? [],
    chatId: source?.ChatId ?? 0,
    contractExecutionDate: source?.ContractExecutionDate ?? '',
    contractGuaranteeRequired: source?.ContractGuaranteeRequired ?? false,
    contractPrice: source?.ContractPrice ?? 0,
    customDealNumber: source?.CustomDealNumber ?? '',
    enableDealDraftCreationWithoutAttachedDocuments: source?.EnableDealDraftCreationWithoutAttachedDocuments ?? false,
    fileGuids: source?.FileGuids ?? [],
    lotId: source?.LotId ?? 0,
  };
}
