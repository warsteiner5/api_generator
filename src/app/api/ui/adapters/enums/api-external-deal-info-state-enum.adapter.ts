import { ExternalDealInfoStateEnum } from '../../enums/external-deal-info-state.enum';
import { ApiExternalDealInfoStateEnum } from '../../../swagger/models/api-external-deal-info-state-enum';

export const apiExternalDealInfoStateEnumAdapter = (source?: ExternalDealInfoStateEnum | null): ApiExternalDealInfoStateEnum => {
  switch (source) {
    case ExternalDealInfoStateEnum.Undefined:
      return ApiExternalDealInfoStateEnum.Undefined;
    case ExternalDealInfoStateEnum.Forming:
      return ApiExternalDealInfoStateEnum.Forming;
    case ExternalDealInfoStateEnum.ContractIsSignedOutOfEp:
      return ApiExternalDealInfoStateEnum.ContractIsSignedOutOfEp;
    default:
      throw new Error(`Enum value is not defined: ExternalDealInfoStateEnum=${String(source)}`);
  }
}
