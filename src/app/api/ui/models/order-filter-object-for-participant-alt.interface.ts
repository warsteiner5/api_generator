import { OrderFilterObjectAlt } from './order-filter-object-alt.interface';

export type OrderFilterObjectForParticipantAlt = OrderFilterObjectAlt & { 'CustomerNameOrInn'?: string | null; };
