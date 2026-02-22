import { ApproveOrderModelAlt } from './approve-order-model-alt.interface';

// @ts-ignore
export interface RejectOrderModelAlt extends ApproveOrderModelAlt {
  cancellationReason: string;
}
