import { RegulationInfo } from '../../models/regulation-info.interface';
import { ApiRegulationInfoDto } from '../../../swagger/models/api-regulation-info-dto';
import { apiRegulationIconTypeEnumAdapter } from '../enums/api-regulation-icon-type-enum.adapter';

export const apiRegulationInfoDtoAdapter = (source?: RegulationInfo | null): ApiRegulationInfoDto => {
  return {
    IconType: source?.iconType === null ? undefined : apiRegulationIconTypeEnumAdapter(source?.iconType),
    RegulationDocumentUrl: source?.regulationDocumentUrl,
    TenantName: source?.tenantName,
  };
}
