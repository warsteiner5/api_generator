import { ApiExternalLoginViewModelAltDto } from '../../../swagger/models/api-external-login-view-model';
import { ExternalLoginViewModelAlt } from '../../models/external-login-view-model-alt.interface';

export const externalLoginViewModelAltAdapter = (source?: ApiExternalLoginViewModelAltDto | null): ExternalLoginViewModelAlt => {
  return {
    authenticationType: source?.AuthenticationType,
    caption: source?.Caption,
    state: source?.State,
    url: source?.Url,
  };
}
