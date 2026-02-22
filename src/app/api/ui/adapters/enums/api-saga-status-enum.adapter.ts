import { SagaStatusEnum } from '../../enums/saga-status.enum';
import { ApiSagaStatusEnum } from '../../../swagger/models/api-saga-status-enum';

export const apiSagaStatusEnumAdapter = (source?: SagaStatusEnum | null): ApiSagaStatusEnum => {
  switch (source) {
    case SagaStatusEnum.New:
      return ApiSagaStatusEnum.New;
    case SagaStatusEnum.InProcess:
      return ApiSagaStatusEnum.InProcess;
    case SagaStatusEnum.Completed:
      return ApiSagaStatusEnum.Completed;
    case SagaStatusEnum.Error:
      return ApiSagaStatusEnum.Error;
    default:
      throw new Error(`Enum value is not defined: SagaStatusEnum=${String(source)}`);
  }
}
