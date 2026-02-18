import { TradeLotCustomer } from '../../models/trade-lot-customer.interface';
import { ApiTradeLotCustomerDto } from '../../../swagger/models/api-trade-lot-customer-dto';
import { adaptApiTradeLotCustomerDeliveryRegionCodesDto } from './api-trade-lot-customer-delivery-region-codes-dto.adapter';

export function adaptApiTradeLotCustomerDto(source?: TradeLotCustomer | null): ApiTradeLotCustomerDto {
  return {
    ApplicationAmount: source?.applicationAmount,
    CustomerId: source?.customerId,
    DeliveryConditions: source?.deliveryConditions,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryRegionCode: source?.deliveryRegionCode,
    DeliveryRegionCodes: (source?.deliveryRegionCodes ?? []).map((item) => adaptApiTradeLotCustomerDeliveryRegionCodesDto(item)),
    PlanGuid: source?.planGuid,
    PlanPositionNumber: source?.planPositionNumber,
    PlanRegistrationNumber: source?.planRegistrationNumber,
    PositionGuid: source?.positionGuid,
  };
}
