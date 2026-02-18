import { ChangeContractBySupplierRequestAlt } from '../../models/change-contract-by-supplier-request-alt.interface';
import { ApiChangeContractBySupplierRequestAltDto } from '../../../swagger/models/api-change-contract-by-supplier-request';
import { adaptApiChatMessageFileWithSignatureDto } from './api-chat-message-file-with-signature-dto.adapter';

export function adaptApiChangeContractBySupplierRequestAltDto(source?: ChangeContractBySupplierRequestAlt | null): ApiChangeContractBySupplierRequestAltDto {
  return {
    DealFile: adaptApiChatMessageFileWithSignatureDto(source?.dealFile),
    DocumentFiles: (source?.documentFiles ?? []).map((item) => adaptApiChatMessageFileWithSignatureDto(item)),
    PowerOfAttorneyId: source?.powerOfAttorneyId,
  };
}
