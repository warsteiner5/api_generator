import { ApiExternalDealInfoStateEnum } from '../../../swagger/models/api-external-deal-info-state-enum';
import { ExternalDealInfoStateEnum } from '../../enums/external-deal-info-state.enum';

export const externalDealInfoStateEnumAdapter = (source?: ApiExternalDealInfoStateEnum | null): ExternalDealInfoStateEnum => {
  switch (source) {
    case ApiExternalDealInfoStateEnum.Undefined:
      return ExternalDealInfoStateEnum.Undefined;
    case ApiExternalDealInfoStateEnum.Forming:
      return ExternalDealInfoStateEnum.Forming;
    case ApiExternalDealInfoStateEnum.ContractIsSignedOutOfEp:
      return ExternalDealInfoStateEnum.ContractIsSignedOutOfEp;
    default:
      throw new Error(`Enum value is not defined: ApiExternalDealInfoStateEnum=${String(source)}`);
  }
}
