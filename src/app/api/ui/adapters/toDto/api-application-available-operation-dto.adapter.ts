import { ApplicationAvailableOperation } from '../../models/application-available-operation.interface';
import { ApiApplicationAvailableOperationDto } from '../../../swagger/models/api-application-available-operation-dto';

export function adaptApiApplicationAvailableOperationDto(source?: ApplicationAvailableOperation | null): ApiApplicationAvailableOperationDto {
  return {
    IsApplicationClarificationResponseAllowed: source?.isApplicationClarificationResponseAllowed,
    IsApproveAllowed: source?.isApproveAllowed,
    IsAttachPaperDealDocumentsAllowed: source?.isAttachPaperDealDocumentsAllowed,
    IsChangeContractFormAllowed: source?.isChangeContractFormAllowed,
    IsChangeDealAllowed: source?.isChangeDealAllowed,
    IsChangePayMethodAllowed: source?.isChangePayMethodAllowed,
    IsChangeToPaperDealFormResponseAllowed: source?.isChangeToPaperDealFormResponseAllowed,
    IsCreateAdditionalAgreementsAllowed: source?.isCreateAdditionalAgreementsAllowed,
    IsDealAgreementAllowed: source?.isDealAgreementAllowed,
    IsDealAgreementApproveAllowed: source?.isDealAgreementApproveAllowed,
    IsDealExecutionOrTerminationAllowed: source?.isDealExecutionOrTerminationAllowed,
    IsDealPaperFormAllowed: source?.isDealPaperFormAllowed,
    IsDifferencesProtocolAllowed: source?.isDifferencesProtocolAllowed,
    IsRejectAdditionalAgreementAllowed: source?.isRejectAdditionalAgreementAllowed,
    IsRevokeApplicationAllowed: source?.isRevokeApplicationAllowed,
    IsRevokeDealAllowed: source?.isRevokeDealAllowed,
    IsSendContractAllowed: source?.isSendContractAllowed,
    IsSendDealToEisAllowed: source?.isSendDealToEisAllowed,
    IsSignAdditionalAgreementAllowed: source?.isSignAdditionalAgreementAllowed,
    IsSupplierDataClarificationAllowed: source?.isSupplierDataClarificationAllowed,
  };
}
