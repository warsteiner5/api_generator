import { MetricTypeAltEnum } from '../enums/metric-type-alt.enum';

// @ts-ignore
export interface MetricDetailsRequestAlt {
  metricType: MetricTypeAltEnum;
  objectId: number;
  page: number;
  pageSize: number;
}
