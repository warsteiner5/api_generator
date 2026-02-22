import { ApiExternalUserInfoAltDto } from '../../../swagger/models/api-external-user-info';
import { ExternalUserInfoAlt } from '../../models/external-user-info-alt.interface';

export const externalUserInfoAltAdapter = (source?: ApiExternalUserInfoAltDto | null): ExternalUserInfoAlt => {
  return {
    loginProvider: source?.LoginProvider,
    oauthToken: source?.OauthToken,
    oauthTokenId: source?.OauthTokenId,
  };
}
