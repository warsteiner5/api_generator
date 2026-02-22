import { ApiUpdateOrganizationBaseInfoDataToSignAltDto } from '../../../swagger/models/api-update-organization-base-info-data-to-sign';
import { UpdateOrganizationBaseInfoDataToSignAlt } from '../../models/update-organization-base-info-data-to-sign-alt.interface';
import { updateBaseInfoFileToSignAdapter } from './update-base-info-file-to-sign.adapter';

export const updateOrganizationBaseInfoDataToSignAltAdapter = (source?: ApiUpdateOrganizationBaseInfoDataToSignAltDto | null): UpdateOrganizationBaseInfoDataToSignAlt => {
  return {
    commonRequestGuid: source?.CommonRequestGuid,
    dataToSign: source?.DataToSign,
    files: source?.Files?.map((item) => updateBaseInfoFileToSignAdapter(item)),
  };
}
