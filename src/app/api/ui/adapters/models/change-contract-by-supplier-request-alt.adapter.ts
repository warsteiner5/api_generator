import { ApiChangeContractBySupplierRequestAltDto } from '../../../swagger/models/api-change-contract-by-supplier-request';
import { ChangeContractBySupplierRequestAlt } from '../../models/change-contract-by-supplier-request-alt.interface';
import { chatMessageFileWithSignatureAdapter } from './chat-message-file-with-signature.adapter';

export const changeContractBySupplierRequestAltAdapter = (source?: ApiChangeContractBySupplierRequestAltDto | null): ChangeContractBySupplierRequestAlt => {
  return {
    dealFile: source?.DealFile === null ? undefined : chatMessageFileWithSignatureAdapter(source?.DealFile),
    documentFiles: source?.DocumentFiles?.map((item) => chatMessageFileWithSignatureAdapter(item)),
    powerOfAttorneyId: source?.PowerOfAttorneyId,
  };
}
