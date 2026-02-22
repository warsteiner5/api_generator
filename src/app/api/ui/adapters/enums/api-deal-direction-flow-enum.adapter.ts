import { DealDirectionFlowEnum } from '../../enums/deal-direction-flow.enum';
import { ApiDealDirectionFlowEnum } from '../../../swagger/models/api-deal-direction-flow-enum';

export const apiDealDirectionFlowEnumAdapter = (source?: DealDirectionFlowEnum | null): ApiDealDirectionFlowEnum => {
  switch (source) {
    case DealDirectionFlowEnum.Undefined:
      return ApiDealDirectionFlowEnum.Undefined;
    case DealDirectionFlowEnum.CustomerToSupplier:
      return ApiDealDirectionFlowEnum.CustomerToSupplier;
    case DealDirectionFlowEnum.SupplierToCustomer:
      return ApiDealDirectionFlowEnum.SupplierToCustomer;
    case DealDirectionFlowEnum.BothDirection:
      return ApiDealDirectionFlowEnum.BothDirection;
    case DealDirectionFlowEnum.CustomerSendPaperContract:
      return ApiDealDirectionFlowEnum.CustomerSendPaperContract;
    default:
      throw new Error(`Enum value is not defined: DealDirectionFlowEnum=${String(source)}`);
  }
}
