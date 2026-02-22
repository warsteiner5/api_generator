import { TradeLotCustomerDeliveryRegionCodes } from './trade-lot-customer-delivery-region-codes.interface';

// @ts-ignore
export interface TradeLotCustomer {
  applicationAmount: number;
  customerId: number;
  deliveryConditions: string;
  deliveryPlace: string;
  deliveryRegionCode: string;
  deliveryRegionCodes: TradeLotCustomerDeliveryRegionCodes[];
  planGuid: string;
  planPositionNumber: string;
  planRegistrationNumber: string;
  positionGuid: string;
}
