/* tslint:disable */
/* eslint-disable */
import { ApiMetricObjectTypeAltEnum } from '../models/api-metric-object-type';
import { ApiMetricTypeAltEnum } from '../models/api-metric-type';
export interface ApiMetricDto {
  MetricTypeId?: ApiMetricTypeAltEnum;
  ObjectId?: string | null;
  ObjectTypeId?: ApiMetricObjectTypeAltEnum;
  ObjectValue?: number;
}
