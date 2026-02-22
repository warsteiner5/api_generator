import { ApiTaskStatusEnum } from '../../../swagger/models/api-task-status-enum';
import { TaskStatusEnum } from '../../enums/task-status.enum';

export const taskStatusEnumAdapter = (source?: ApiTaskStatusEnum | null): TaskStatusEnum => {
  switch (source) {
    case ApiTaskStatusEnum.WaitingForRun:
      return TaskStatusEnum.WaitingForRun;
    case ApiTaskStatusEnum.Running:
      return TaskStatusEnum.Running;
    case ApiTaskStatusEnum.CompleteSuccess:
      return TaskStatusEnum.CompleteSuccess;
    case ApiTaskStatusEnum.CompleteSuccessWithWarnings:
      return TaskStatusEnum.CompleteSuccessWithWarnings;
    case ApiTaskStatusEnum.CompleteError:
      return TaskStatusEnum.CompleteError;
    default:
      throw new Error(`Enum value is not defined: ApiTaskStatusEnum=${String(source)}`);
  }
}
