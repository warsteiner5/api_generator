import { UpdateOrganizationBaseInfoDataToSignAlt } from '../../models/update-organization-base-info-data-to-sign-alt.interface';
import { ApiUpdateOrganizationBaseInfoDataToSignAltDto } from '../../../swagger/models/api-update-organization-base-info-data-to-sign';
import { apiUpdateBaseInfoFileToSignDtoAdapter } from './api-update-base-info-file-to-sign-dto.adapter';

export const apiUpdateOrganizationBaseInfoDataToSignAltDtoAdapter = (source?: UpdateOrganizationBaseInfoDataToSignAlt | null): ApiUpdateOrganizationBaseInfoDataToSignAltDto => {
  return {
    CommonRequestGuid: source?.commonRequestGuid,
    DataToSign: source?.dataToSign,
    Files: source?.files?.map((item) => apiUpdateBaseInfoFileToSignDtoAdapter(item)),
  };
}
