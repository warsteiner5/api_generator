import { ApiChatMessageTypeAltEnum } from '../../../swagger/models/api-chat-message-type';
import { ChatMessageTypeAltEnum } from '../../enums/chat-message-type-alt.enum';

export const chatMessageTypeAltEnumAdapter = (source?: ApiChatMessageTypeAltEnum | null): ChatMessageTypeAltEnum => {
  switch (source) {
    case ApiChatMessageTypeAltEnum.Undefined:
      return ChatMessageTypeAltEnum.Undefined;
    case ApiChatMessageTypeAltEnum.SendContractFromCustomerToSupplier:
      return ChatMessageTypeAltEnum.SendContractFromCustomerToSupplier;
    case ApiChatMessageTypeAltEnum.ChangeContractByCustomer:
      return ChatMessageTypeAltEnum.ChangeContractByCustomer;
    case ApiChatMessageTypeAltEnum.ChangeContractBySupplier:
      return ChatMessageTypeAltEnum.ChangeContractBySupplier;
    case ApiChatMessageTypeAltEnum.DifferenceProtocol:
      return ChatMessageTypeAltEnum.DifferenceProtocol;
    case ApiChatMessageTypeAltEnum.Simple:
      return ChatMessageTypeAltEnum.Simple;
    case ApiChatMessageTypeAltEnum.ReworkContract:
      return ChatMessageTypeAltEnum.ReworkContract;
    case ApiChatMessageTypeAltEnum.SendContractFromSupplierToCustomer:
      return ChatMessageTypeAltEnum.SendContractFromSupplierToCustomer;
    case ApiChatMessageTypeAltEnum.ChangeFormToPaperDeal:
      return ChatMessageTypeAltEnum.ChangeFormToPaperDeal;
    case ApiChatMessageTypeAltEnum.SupplierAddDealProvision:
      return ChatMessageTypeAltEnum.SupplierAddDealProvision;
    case ApiChatMessageTypeAltEnum.ReturnContractToForming:
      return ChatMessageTypeAltEnum.ReturnContractToForming;
    case ApiChatMessageTypeAltEnum.ApplicationClarificationRequest:
      return ChatMessageTypeAltEnum.ApplicationClarificationRequest;
    case ApiChatMessageTypeAltEnum.ApplicationClarificationResponse:
      return ChatMessageTypeAltEnum.ApplicationClarificationResponse;
    default:
      throw new Error(`Enum value is not defined: ApiChatMessageTypeAltEnum=${String(source)}`);
  }
}
