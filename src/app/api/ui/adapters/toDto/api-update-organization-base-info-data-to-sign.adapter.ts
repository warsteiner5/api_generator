import { UpdateOrganizationBaseInfoDataToSignAlt } from '../../models/update-organization-base-info-data-to-sign-alt.interface';
import { ApiUpdateOrganizationBaseInfoDataToSignAltDto } from '../../../swagger/models/api-update-organization-base-info-data-to-sign';
import { adaptApiUpdateBaseInfoFileToSignDto } from './api-update-base-info-file-to-sign-dto.adapter';

export function adaptApiUpdateOrganizationBaseInfoDataToSignAltDto(source?: UpdateOrganizationBaseInfoDataToSignAlt | null): ApiUpdateOrganizationBaseInfoDataToSignAltDto {
  return {
    CommonRequestGuid: source?.commonRequestGuid,
    DataToSign: source?.dataToSign,
    Files: (source?.files ?? []).map((item) => adaptApiUpdateBaseInfoFileToSignDto(item)),
  };
}
