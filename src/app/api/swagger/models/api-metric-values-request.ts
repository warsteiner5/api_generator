/* tslint:disable */
/* eslint-disable */
import { ApiMetricObjectTypeAltEnum } from '../models/api-metric-object-type';
import { ApiMetricTypeAltEnum } from '../models/api-metric-type';
export interface ApiMetricValuesRequestAltDto {
  MetricObjectType?: ApiMetricObjectTypeAltEnum;
  MetricType?: ApiMetricTypeAltEnum;
  ObjectIds?: Array<string> | null;
}
