import { MetricObjectTypeAltEnum } from '../enums/metric-object-type-alt.enum';
import { MetricTypeAltEnum } from '../enums/metric-type-alt.enum';

// @ts-ignore
export interface Metric {
  metricTypeId: MetricTypeAltEnum;
  objectId: string;
  objectTypeId: MetricObjectTypeAltEnum;
  objectValue: number;
}
