import { MetricObjectTypeAltEnum } from '../enums/metric-object-type-alt.enum';
import { MetricTypeAltEnum } from '../enums/metric-type-alt.enum';

export interface MetricValuesRequestAlt {
  metricObjectType: MetricObjectTypeAltEnum;
  metricType: MetricTypeAltEnum;
  objectIds: string[];
}
