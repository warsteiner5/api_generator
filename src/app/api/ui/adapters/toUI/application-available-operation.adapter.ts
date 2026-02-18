import { ApiApplicationAvailableOperationDto } from '../../../swagger/models/api-application-available-operation-dto';
import { ApplicationAvailableOperation } from '../../models/application-available-operation.interface';

export function adaptApplicationAvailableOperationToUI(source?: ApiApplicationAvailableOperationDto | null): ApplicationAvailableOperation {
  return {
    isApplicationClarificationResponseAllowed: source?.IsApplicationClarificationResponseAllowed ?? false,
    isApproveAllowed: source?.IsApproveAllowed ?? false,
    isAttachPaperDealDocumentsAllowed: source?.IsAttachPaperDealDocumentsAllowed ?? false,
    isChangeContractFormAllowed: source?.IsChangeContractFormAllowed ?? false,
    isChangeDealAllowed: source?.IsChangeDealAllowed ?? false,
    isChangePayMethodAllowed: source?.IsChangePayMethodAllowed ?? false,
    isChangeToPaperDealFormResponseAllowed: source?.IsChangeToPaperDealFormResponseAllowed ?? false,
    isCreateAdditionalAgreementsAllowed: source?.IsCreateAdditionalAgreementsAllowed ?? false,
    isDealAgreementAllowed: source?.IsDealAgreementAllowed ?? false,
    isDealAgreementApproveAllowed: source?.IsDealAgreementApproveAllowed ?? false,
    isDealExecutionOrTerminationAllowed: source?.IsDealExecutionOrTerminationAllowed ?? false,
    isDealPaperFormAllowed: source?.IsDealPaperFormAllowed ?? false,
    isDifferencesProtocolAllowed: source?.IsDifferencesProtocolAllowed ?? false,
    isRejectAdditionalAgreementAllowed: source?.IsRejectAdditionalAgreementAllowed ?? false,
    isRevokeApplicationAllowed: source?.IsRevokeApplicationAllowed ?? false,
    isRevokeDealAllowed: source?.IsRevokeDealAllowed ?? false,
    isSendContractAllowed: source?.IsSendContractAllowed ?? false,
    isSendDealToEisAllowed: source?.IsSendDealToEisAllowed ?? false,
    isSignAdditionalAgreementAllowed: source?.IsSignAdditionalAgreementAllowed ?? false,
    isSupplierDataClarificationAllowed: source?.IsSupplierDataClarificationAllowed ?? false,
  };
}
