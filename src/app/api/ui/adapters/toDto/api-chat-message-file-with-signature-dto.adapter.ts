import { ChatMessageFileWithSignature } from '../../models/chat-message-file-with-signature.interface';
import { ApiChatMessageFileWithSignatureDto } from '../../../swagger/models/api-chat-message-file-with-signature-dto';

export function adaptApiChatMessageFileWithSignatureDto(source?: ChatMessageFileWithSignature | null): ApiChatMessageFileWithSignatureDto {
  return {
    Guid: source?.guid,
    SignData: source?.signData,
    Signature: source?.signature,
  };
}
