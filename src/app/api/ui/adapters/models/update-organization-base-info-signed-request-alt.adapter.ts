import { ApiUpdateOrganizationBaseInfoSignedRequestAltDto } from '../../../swagger/models/api-update-organization-base-info-signed-request';
import { UpdateOrganizationBaseInfoSignedRequestAlt } from '../../models/update-organization-base-info-signed-request-alt.interface';

export const updateOrganizationBaseInfoSignedRequestAltAdapter = (source?: ApiUpdateOrganizationBaseInfoSignedRequestAltDto | null): UpdateOrganizationBaseInfoSignedRequestAlt => {
  return {
    commonRequestGuid: source?.CommonRequestGuid,
    files: source?.Files as any,
    signThumbprint: source?.SignThumbprint,
    signedRequestData: source?.SignedRequestData,
  };
}
