/* tslint:disable */
/* eslint-disable */
import { ApiApproveOrderModelAltDto } from '../models/api-approve-order-model';
export type ApiRejectOrderModelAltDto = ApiApproveOrderModelAltDto & {
'CancellationReason'?: string | null;
};
