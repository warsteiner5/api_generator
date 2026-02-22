import { RegulationIconTypeEnum } from '../enums/regulation-icon-type.enum';

// @ts-ignore
export interface RegulationInfo {
  iconType: RegulationIconTypeEnum;
  regulationDocumentUrl: string;
  tenantName: string;
}
