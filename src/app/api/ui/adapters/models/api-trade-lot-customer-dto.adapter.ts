import { TradeLotCustomer } from '../../models/trade-lot-customer.interface';
import { ApiTradeLotCustomerDto } from '../../../swagger/models/api-trade-lot-customer-dto';
import { apiTradeLotCustomerDeliveryRegionCodesDtoAdapter } from './api-trade-lot-customer-delivery-region-codes-dto.adapter';

export const apiTradeLotCustomerDtoAdapter = (source?: TradeLotCustomer | null): ApiTradeLotCustomerDto => {
  return {
    ApplicationAmount: source?.applicationAmount,
    CustomerId: source?.customerId,
    DeliveryConditions: source?.deliveryConditions,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryRegionCode: source?.deliveryRegionCode,
    DeliveryRegionCodes: source?.deliveryRegionCodes?.map((item) => apiTradeLotCustomerDeliveryRegionCodesDtoAdapter(item)),
    PlanGuid: source?.planGuid,
    PlanPositionNumber: source?.planPositionNumber,
    PlanRegistrationNumber: source?.planRegistrationNumber,
    PositionGuid: source?.positionGuid,
  };
}
