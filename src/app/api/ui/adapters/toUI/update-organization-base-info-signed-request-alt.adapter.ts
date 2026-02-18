import { ApiUpdateOrganizationBaseInfoSignedRequestAltDto } from '../../../swagger/models/api-update-organization-base-info-signed-request';
import { UpdateOrganizationBaseInfoSignedRequestAlt } from '../../models/update-organization-base-info-signed-request-alt.interface';

export function adaptUpdateOrganizationBaseInfoSignedRequestAltToUI(source?: ApiUpdateOrganizationBaseInfoSignedRequestAltDto | null): UpdateOrganizationBaseInfoSignedRequestAlt {
  return {
    commonRequestGuid: source?.CommonRequestGuid ?? '',
    files: (source?.Files ?? null) as any,
    signThumbprint: source?.SignThumbprint ?? '',
    signedRequestData: source?.SignedRequestData ?? '',
  };
}
