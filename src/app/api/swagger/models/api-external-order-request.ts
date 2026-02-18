/* tslint:disable */
/* eslint-disable */
import { ApiOrderAltDto } from '../models/api-order';
export interface ApiExternalOrderRequestAltDto {
  CustomerId?: number;
  ExternalSystemId?: number;
  Order?: ApiOrderAltDto | null;
  SecurityToken?: string | null;
}
