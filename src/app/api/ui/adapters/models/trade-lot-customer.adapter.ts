import { ApiTradeLotCustomerDto } from '../../../swagger/models/api-trade-lot-customer-dto';
import { TradeLotCustomer } from '../../models/trade-lot-customer.interface';
import { tradeLotCustomerDeliveryRegionCodesAdapter } from './trade-lot-customer-delivery-region-codes.adapter';

export const tradeLotCustomerAdapter = (source?: ApiTradeLotCustomerDto | null): TradeLotCustomer => {
  return {
    applicationAmount: source?.ApplicationAmount,
    customerId: source?.CustomerId,
    deliveryConditions: source?.DeliveryConditions,
    deliveryPlace: source?.DeliveryPlace,
    deliveryRegionCode: source?.DeliveryRegionCode,
    deliveryRegionCodes: source?.DeliveryRegionCodes?.map((item) => tradeLotCustomerDeliveryRegionCodesAdapter(item)),
    planGuid: source?.PlanGuid,
    planPositionNumber: source?.PlanPositionNumber,
    planRegistrationNumber: source?.PlanRegistrationNumber,
    positionGuid: source?.PositionGuid,
  };
}
