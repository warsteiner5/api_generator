import { ChatMessageFileWithSignature } from './chat-message-file-with-signature.interface';

export interface ChangeContractBySupplierRequestAlt {
  dealFile: ChatMessageFileWithSignature;
  documentFiles: ChatMessageFileWithSignature[];
  powerOfAttorneyId: string;
}
