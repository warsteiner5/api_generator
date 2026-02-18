import { ApiSagaStatusEnum } from '../../../swagger/models/api-saga-status-enum';
import { SagaStatusEnum } from '../../enums/saga-status.enum';

export function adaptSagaStatusEnumToUI(source?: ApiSagaStatusEnum | null): SagaStatusEnum {
  switch (source) {
    case ApiSagaStatusEnum.New:
      return SagaStatusEnum.New;
    case ApiSagaStatusEnum.InProcess:
      return SagaStatusEnum.InProcess;
    case ApiSagaStatusEnum.Completed:
      return SagaStatusEnum.Completed;
    case ApiSagaStatusEnum.Error:
      return SagaStatusEnum.Error;
    default:
      throw new Error(`Enum value is not defined: ApiSagaStatusEnum=${String(source)}`);
  }
}
