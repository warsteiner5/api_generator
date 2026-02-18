import { ApiChangeContractBySupplierRequestAltDto } from '../../../swagger/models/api-change-contract-by-supplier-request';
import { ChangeContractBySupplierRequestAlt } from '../../models/change-contract-by-supplier-request-alt.interface';
import { adaptChatMessageFileWithSignatureToUI } from './chat-message-file-with-signature.adapter';

export function adaptChangeContractBySupplierRequestAltToUI(source?: ApiChangeContractBySupplierRequestAltDto | null): ChangeContractBySupplierRequestAlt {
  return {
    dealFile: adaptChatMessageFileWithSignatureToUI(source?.DealFile),
    documentFiles: (source?.DocumentFiles ?? []).map((item) => adaptChatMessageFileWithSignatureToUI(item)),
    powerOfAttorneyId: source?.PowerOfAttorneyId ?? '',
  };
}
