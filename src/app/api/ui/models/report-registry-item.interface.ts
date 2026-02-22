import { ReportFormatTypeEnum } from '../enums/report-format-type.enum';
import { ReportTypeEnum } from '../enums/report-type.enum';
import { SagaStatusEnum } from '../enums/saga-status.enum';

// @ts-ignore
export interface ReportRegistryItem {
  formatType: ReportFormatTypeEnum;
  guid: string;
  reportDate: string;
  reportStatus: SagaStatusEnum;
  size: number;
  type: ReportTypeEnum;
}
