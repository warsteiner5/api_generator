import { ExternalLoginViewModelAlt } from '../../models/external-login-view-model-alt.interface';
import { ApiExternalLoginViewModelAltDto } from '../../../swagger/models/api-external-login-view-model';

export function adaptApiExternalLoginViewModelAltDto(source?: ExternalLoginViewModelAlt | null): ApiExternalLoginViewModelAltDto {
  return {
    AuthenticationType: source?.authenticationType,
    Caption: source?.caption,
    State: source?.state,
    Url: source?.url,
  };
}
