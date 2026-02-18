import { RegulationIconTypeEnum } from '../enums/regulation-icon-type.enum';

export interface RegulationInfo {
  iconType: RegulationIconTypeEnum;
  regulationDocumentUrl: string;
  tenantName: string;
}
