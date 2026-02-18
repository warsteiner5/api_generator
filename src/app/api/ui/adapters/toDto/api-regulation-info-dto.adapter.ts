import { RegulationInfo } from '../../models/regulation-info.interface';
import { ApiRegulationInfoDto } from '../../../swagger/models/api-regulation-info-dto';
import { adaptApiRegulationIconTypeEnum } from './api-regulation-icon-type-enum.adapter';

export function adaptApiRegulationInfoDto(source?: RegulationInfo | null): ApiRegulationInfoDto {
  return {
    IconType: adaptApiRegulationIconTypeEnum(source?.iconType),
    RegulationDocumentUrl: source?.regulationDocumentUrl,
    TenantName: source?.tenantName,
  };
}
