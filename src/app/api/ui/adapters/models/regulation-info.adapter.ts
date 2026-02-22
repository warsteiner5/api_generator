import { ApiRegulationInfoDto } from '../../../swagger/models/api-regulation-info-dto';
import { RegulationInfo } from '../../models/regulation-info.interface';
import { regulationIconTypeEnumAdapter } from '../enums/regulation-icon-type-enum.adapter';

export const regulationInfoAdapter = (source?: ApiRegulationInfoDto | null): RegulationInfo => {
  return {
    iconType: source?.IconType === null ? undefined : regulationIconTypeEnumAdapter(source?.IconType),
    regulationDocumentUrl: source?.RegulationDocumentUrl,
    tenantName: source?.TenantName,
  };
}
