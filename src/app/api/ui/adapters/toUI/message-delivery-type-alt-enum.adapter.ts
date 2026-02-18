import { ApiMessageDeliveryTypeAltEnum } from '../../../swagger/models/api-message-delivery-type';
import { MessageDeliveryTypeAltEnum } from '../../enums/message-delivery-type-alt.enum';

export function adaptMessageDeliveryTypeAltEnumToUI(source?: ApiMessageDeliveryTypeAltEnum | null): MessageDeliveryTypeAltEnum {
  switch (source) {
    case ApiMessageDeliveryTypeAltEnum.Undefined:
      return MessageDeliveryTypeAltEnum.Undefined;
    case ApiMessageDeliveryTypeAltEnum.ToMemberArea:
      return MessageDeliveryTypeAltEnum.ToMemberArea;
    case ApiMessageDeliveryTypeAltEnum.ToMemberAreaAndNotifyByEmail:
      return MessageDeliveryTypeAltEnum.ToMemberAreaAndNotifyByEmail;
    case ApiMessageDeliveryTypeAltEnum.ToMemberAreaAndSendCopyToEmail:
      return MessageDeliveryTypeAltEnum.ToMemberAreaAndSendCopyToEmail;
    case ApiMessageDeliveryTypeAltEnum.ToEmail:
      return MessageDeliveryTypeAltEnum.ToEmail;
    default:
      throw new Error(`Enum value is not defined: ApiMessageDeliveryTypeAltEnum=${String(source)}`);
  }
}
