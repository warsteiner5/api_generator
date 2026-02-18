import { ApiUpdateOrganizationBaseInfoDataToSignAltDto } from '../../../swagger/models/api-update-organization-base-info-data-to-sign';
import { UpdateOrganizationBaseInfoDataToSignAlt } from '../../models/update-organization-base-info-data-to-sign-alt.interface';
import { adaptUpdateBaseInfoFileToSignToUI } from './update-base-info-file-to-sign.adapter';

export function adaptUpdateOrganizationBaseInfoDataToSignAltToUI(source?: ApiUpdateOrganizationBaseInfoDataToSignAltDto | null): UpdateOrganizationBaseInfoDataToSignAlt {
  return {
    commonRequestGuid: source?.CommonRequestGuid ?? '',
    dataToSign: source?.DataToSign ?? '',
    files: (source?.Files ?? []).map((item) => adaptUpdateBaseInfoFileToSignToUI(item)),
  };
}
