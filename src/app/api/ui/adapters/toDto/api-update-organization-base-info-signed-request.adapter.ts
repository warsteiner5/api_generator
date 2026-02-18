import { UpdateOrganizationBaseInfoSignedRequestAlt } from '../../models/update-organization-base-info-signed-request-alt.interface';
import { ApiUpdateOrganizationBaseInfoSignedRequestAltDto } from '../../../swagger/models/api-update-organization-base-info-signed-request';

export function adaptApiUpdateOrganizationBaseInfoSignedRequestAltDto(source?: UpdateOrganizationBaseInfoSignedRequestAlt | null): ApiUpdateOrganizationBaseInfoSignedRequestAltDto {
  return {
    CommonRequestGuid: source?.commonRequestGuid,
    Files: source?.files as any,
    SignThumbprint: source?.signThumbprint,
    SignedRequestData: source?.signedRequestData,
  };
}
