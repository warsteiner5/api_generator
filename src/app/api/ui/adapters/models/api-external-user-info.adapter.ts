import { ExternalUserInfoAlt } from '../../models/external-user-info-alt.interface';
import { ApiExternalUserInfoAltDto } from '../../../swagger/models/api-external-user-info';

export const apiExternalUserInfoAltDtoAdapter = (source?: ExternalUserInfoAlt | null): ApiExternalUserInfoAltDto => {
  return {
    LoginProvider: source?.loginProvider,
    OauthToken: source?.oauthToken,
    OauthTokenId: source?.oauthTokenId,
  };
}
