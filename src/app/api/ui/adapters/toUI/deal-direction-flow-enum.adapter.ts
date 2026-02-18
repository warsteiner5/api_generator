import { ApiDealDirectionFlowEnum } from '../../../swagger/models/api-deal-direction-flow-enum';
import { DealDirectionFlowEnum } from '../../enums/deal-direction-flow.enum';

export function adaptDealDirectionFlowEnumToUI(source?: ApiDealDirectionFlowEnum | null): DealDirectionFlowEnum {
  switch (source) {
    case ApiDealDirectionFlowEnum.Undefined:
      return DealDirectionFlowEnum.Undefined;
    case ApiDealDirectionFlowEnum.CustomerToSupplier:
      return DealDirectionFlowEnum.CustomerToSupplier;
    case ApiDealDirectionFlowEnum.SupplierToCustomer:
      return DealDirectionFlowEnum.SupplierToCustomer;
    case ApiDealDirectionFlowEnum.BothDirection:
      return DealDirectionFlowEnum.BothDirection;
    case ApiDealDirectionFlowEnum.CustomerSendPaperContract:
      return DealDirectionFlowEnum.CustomerSendPaperContract;
    default:
      throw new Error(`Enum value is not defined: ApiDealDirectionFlowEnum=${String(source)}`);
  }
}
