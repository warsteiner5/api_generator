// @ts-ignore
export interface CreateDealDraftByParticipantRequest {
  applicationId: number;
  applicationLotItemIds: number[];
  chatId: number;
  contractExecutionDate: string;
  contractGuaranteeRequired: boolean;
  contractPrice: number;
  customDealNumber: string;
  enableDealDraftCreationWithoutAttachedDocuments: boolean;
  fileGuids: string[];
  lotId: number;
}
