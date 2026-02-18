import { InvitationMethodEnum } from '../../enums/invitation-method.enum';
import { ApiInvitationMethodEnum } from '../../../swagger/models/api-invitation-method-enum';

export function adaptApiInvitationMethodEnum(source?: InvitationMethodEnum | null): ApiInvitationMethodEnum {
  switch (source) {
    case InvitationMethodEnum.None:
      return ApiInvitationMethodEnum.None;
    case InvitationMethodEnum.Manual:
      return ApiInvitationMethodEnum.Manual;
    case InvitationMethodEnum.OKPD2:
      return ApiInvitationMethodEnum.OKPD2;
    case InvitationMethodEnum.Tags:
      return ApiInvitationMethodEnum.Tags;
    default:
      throw new Error(`Enum value is not defined: InvitationMethodEnum=${String(source)}`);
  }
}
