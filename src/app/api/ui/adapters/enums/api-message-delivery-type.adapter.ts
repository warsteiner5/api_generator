import { MessageDeliveryTypeAltEnum } from '../../enums/message-delivery-type-alt.enum';
import { ApiMessageDeliveryTypeAltEnum } from '../../../swagger/models/api-message-delivery-type';

export const apiMessageDeliveryTypeAltEnumAdapter = (source?: MessageDeliveryTypeAltEnum | null): ApiMessageDeliveryTypeAltEnum => {
  switch (source) {
    case MessageDeliveryTypeAltEnum.Undefined:
      return ApiMessageDeliveryTypeAltEnum.Undefined;
    case MessageDeliveryTypeAltEnum.ToMemberArea:
      return ApiMessageDeliveryTypeAltEnum.ToMemberArea;
    case MessageDeliveryTypeAltEnum.ToMemberAreaAndNotifyByEmail:
      return ApiMessageDeliveryTypeAltEnum.ToMemberAreaAndNotifyByEmail;
    case MessageDeliveryTypeAltEnum.ToMemberAreaAndSendCopyToEmail:
      return ApiMessageDeliveryTypeAltEnum.ToMemberAreaAndSendCopyToEmail;
    case MessageDeliveryTypeAltEnum.ToEmail:
      return ApiMessageDeliveryTypeAltEnum.ToEmail;
    default:
      throw new Error(`Enum value is not defined: MessageDeliveryTypeAltEnum=${String(source)}`);
  }
}
