import { ApproveOrderModelAlt } from './approve-order-model-alt.interface';

export type RejectOrderModelAlt = ApproveOrderModelAlt & { 'CancellationReason'?: string | null; };
