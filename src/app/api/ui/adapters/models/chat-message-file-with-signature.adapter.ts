import { ApiChatMessageFileWithSignatureDto } from '../../../swagger/models/api-chat-message-file-with-signature-dto';
import { ChatMessageFileWithSignature } from '../../models/chat-message-file-with-signature.interface';

export const chatMessageFileWithSignatureAdapter = (source?: ApiChatMessageFileWithSignatureDto | null): ChatMessageFileWithSignature => {
  return {
    guid: source?.Guid,
    signData: source?.SignData,
    signature: source?.Signature,
  };
}
