import { ChatMessageTypeAltEnum } from '../../enums/chat-message-type-alt.enum';
import { ApiChatMessageTypeAltEnum } from '../../../swagger/models/api-chat-message-type';

export const apiChatMessageTypeAltEnumAdapter = (source?: ChatMessageTypeAltEnum | null): ApiChatMessageTypeAltEnum => {
  switch (source) {
    case ChatMessageTypeAltEnum.Undefined:
      return ApiChatMessageTypeAltEnum.Undefined;
    case ChatMessageTypeAltEnum.SendContractFromCustomerToSupplier:
      return ApiChatMessageTypeAltEnum.SendContractFromCustomerToSupplier;
    case ChatMessageTypeAltEnum.ChangeContractByCustomer:
      return ApiChatMessageTypeAltEnum.ChangeContractByCustomer;
    case ChatMessageTypeAltEnum.ChangeContractBySupplier:
      return ApiChatMessageTypeAltEnum.ChangeContractBySupplier;
    case ChatMessageTypeAltEnum.DifferenceProtocol:
      return ApiChatMessageTypeAltEnum.DifferenceProtocol;
    case ChatMessageTypeAltEnum.Simple:
      return ApiChatMessageTypeAltEnum.Simple;
    case ChatMessageTypeAltEnum.ReworkContract:
      return ApiChatMessageTypeAltEnum.ReworkContract;
    case ChatMessageTypeAltEnum.SendContractFromSupplierToCustomer:
      return ApiChatMessageTypeAltEnum.SendContractFromSupplierToCustomer;
    case ChatMessageTypeAltEnum.ChangeFormToPaperDeal:
      return ApiChatMessageTypeAltEnum.ChangeFormToPaperDeal;
    case ChatMessageTypeAltEnum.SupplierAddDealProvision:
      return ApiChatMessageTypeAltEnum.SupplierAddDealProvision;
    case ChatMessageTypeAltEnum.ReturnContractToForming:
      return ApiChatMessageTypeAltEnum.ReturnContractToForming;
    case ChatMessageTypeAltEnum.ApplicationClarificationRequest:
      return ApiChatMessageTypeAltEnum.ApplicationClarificationRequest;
    case ChatMessageTypeAltEnum.ApplicationClarificationResponse:
      return ApiChatMessageTypeAltEnum.ApplicationClarificationResponse;
    default:
      throw new Error(`Enum value is not defined: ChatMessageTypeAltEnum=${String(source)}`);
  }
}
