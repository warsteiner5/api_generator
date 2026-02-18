import { OrderAlt } from './order-alt.interface';

export interface ExternalOrderRequestAlt {
  customerId: number;
  externalSystemId: number;
  order: OrderAlt;
  securityToken: string;
}
