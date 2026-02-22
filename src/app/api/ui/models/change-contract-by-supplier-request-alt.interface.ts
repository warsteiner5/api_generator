import { ChatMessageFileWithSignature } from './chat-message-file-with-signature.interface';

// @ts-ignore
export interface ChangeContractBySupplierRequestAlt {
  dealFile: ChatMessageFileWithSignature;
  documentFiles: ChatMessageFileWithSignature[];
  powerOfAttorneyId: string;
}
