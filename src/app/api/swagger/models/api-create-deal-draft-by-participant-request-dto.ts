/* tslint:disable */
/* eslint-disable */
export interface ApiCreateDealDraftByParticipantRequestDto {
  ApplicationId?: number;
  ApplicationLotItemIds?: Array<number> | null;
  ChatId?: number;
  ContractExecutionDate?: string | null;
  ContractGuaranteeRequired?: boolean | null;
  ContractPrice?: number | null;
  CustomDealNumber?: string | null;
  EnableDealDraftCreationWithoutAttachedDocuments?: boolean;
  FileGuids?: Array<string> | null;
  LotId?: number;
}
