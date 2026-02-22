import { ApiInvitationMethodEnum } from '../../../swagger/models/api-invitation-method-enum';
import { InvitationMethodEnum } from '../../enums/invitation-method.enum';

export const invitationMethodEnumAdapter = (source?: ApiInvitationMethodEnum | null): InvitationMethodEnum => {
  switch (source) {
    case ApiInvitationMethodEnum.None:
      return InvitationMethodEnum.None;
    case ApiInvitationMethodEnum.Manual:
      return InvitationMethodEnum.Manual;
    case ApiInvitationMethodEnum.OKPD2:
      return InvitationMethodEnum.OKPD2;
    case ApiInvitationMethodEnum.Tags:
      return InvitationMethodEnum.Tags;
    default:
      throw new Error(`Enum value is not defined: ApiInvitationMethodEnum=${String(source)}`);
  }
}
