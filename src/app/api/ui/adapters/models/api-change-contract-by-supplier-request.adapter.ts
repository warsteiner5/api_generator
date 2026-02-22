import { ChangeContractBySupplierRequestAlt } from '../../models/change-contract-by-supplier-request-alt.interface';
import { ApiChangeContractBySupplierRequestAltDto } from '../../../swagger/models/api-change-contract-by-supplier-request';
import { apiChatMessageFileWithSignatureDtoAdapter } from './api-chat-message-file-with-signature-dto.adapter';

export const apiChangeContractBySupplierRequestAltDtoAdapter = (source?: ChangeContractBySupplierRequestAlt | null): ApiChangeContractBySupplierRequestAltDto => {
  return {
    DealFile: source?.dealFile === null ? undefined : apiChatMessageFileWithSignatureDtoAdapter(source?.dealFile),
    DocumentFiles: source?.documentFiles?.map((item) => apiChatMessageFileWithSignatureDtoAdapter(item)),
    PowerOfAttorneyId: source?.powerOfAttorneyId,
  };
}
