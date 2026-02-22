import { OrderAlt } from './order-alt.interface';

// @ts-ignore
export interface ExternalOrderRequestAlt {
  customerId: number;
  externalSystemId: number;
  order: OrderAlt;
  securityToken: string;
}
