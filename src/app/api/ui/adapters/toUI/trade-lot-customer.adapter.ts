import { ApiTradeLotCustomerDto } from '../../../swagger/models/api-trade-lot-customer-dto';
import { TradeLotCustomer } from '../../models/trade-lot-customer.interface';
import { adaptTradeLotCustomerDeliveryRegionCodesToUI } from './trade-lot-customer-delivery-region-codes.adapter';

export function adaptTradeLotCustomerToUI(source?: ApiTradeLotCustomerDto | null): TradeLotCustomer {
  return {
    applicationAmount: source?.ApplicationAmount ?? 0,
    customerId: source?.CustomerId ?? 0,
    deliveryConditions: source?.DeliveryConditions ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryRegionCode: source?.DeliveryRegionCode ?? '',
    deliveryRegionCodes: (source?.DeliveryRegionCodes ?? []).map((item) => adaptTradeLotCustomerDeliveryRegionCodesToUI(item)),
    planGuid: source?.PlanGuid ?? '',
    planPositionNumber: source?.PlanPositionNumber ?? '',
    planRegistrationNumber: source?.PlanRegistrationNumber ?? '',
    positionGuid: source?.PositionGuid ?? '',
  };
}
