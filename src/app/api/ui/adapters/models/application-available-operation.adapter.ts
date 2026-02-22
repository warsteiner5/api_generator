import { ApiApplicationAvailableOperationDto } from '../../../swagger/models/api-application-available-operation-dto';
import { ApplicationAvailableOperation } from '../../models/application-available-operation.interface';

export const applicationAvailableOperationAdapter = (source?: ApiApplicationAvailableOperationDto | null): ApplicationAvailableOperation => {
  return {
    isApplicationClarificationResponseAllowed: source?.IsApplicationClarificationResponseAllowed,
    isApproveAllowed: source?.IsApproveAllowed,
    isAttachPaperDealDocumentsAllowed: source?.IsAttachPaperDealDocumentsAllowed,
    isChangeContractFormAllowed: source?.IsChangeContractFormAllowed,
    isChangeDealAllowed: source?.IsChangeDealAllowed,
    isChangePayMethodAllowed: source?.IsChangePayMethodAllowed,
    isChangeToPaperDealFormResponseAllowed: source?.IsChangeToPaperDealFormResponseAllowed,
    isCreateAdditionalAgreementsAllowed: source?.IsCreateAdditionalAgreementsAllowed,
    isDealAgreementAllowed: source?.IsDealAgreementAllowed,
    isDealAgreementApproveAllowed: source?.IsDealAgreementApproveAllowed,
    isDealExecutionOrTerminationAllowed: source?.IsDealExecutionOrTerminationAllowed,
    isDealPaperFormAllowed: source?.IsDealPaperFormAllowed,
    isDifferencesProtocolAllowed: source?.IsDifferencesProtocolAllowed,
    isRejectAdditionalAgreementAllowed: source?.IsRejectAdditionalAgreementAllowed,
    isRevokeApplicationAllowed: source?.IsRevokeApplicationAllowed,
    isRevokeDealAllowed: source?.IsRevokeDealAllowed,
    isSendContractAllowed: source?.IsSendContractAllowed,
    isSendDealToEisAllowed: source?.IsSendDealToEisAllowed,
    isSignAdditionalAgreementAllowed: source?.IsSignAdditionalAgreementAllowed,
    isSupplierDataClarificationAllowed: source?.IsSupplierDataClarificationAllowed,
  };
}
