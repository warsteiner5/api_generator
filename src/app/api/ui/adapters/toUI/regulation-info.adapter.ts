import { ApiRegulationInfoDto } from '../../../swagger/models/api-regulation-info-dto';
import { RegulationInfo } from '../../models/regulation-info.interface';
import { adaptRegulationIconTypeEnumToUI } from './regulation-icon-type-enum.adapter';

export function adaptRegulationInfoToUI(source?: ApiRegulationInfoDto | null): RegulationInfo {
  return {
    iconType: adaptRegulationIconTypeEnumToUI(source?.IconType),
    regulationDocumentUrl: source?.RegulationDocumentUrl ?? '',
    tenantName: source?.TenantName ?? '',
  };
}
