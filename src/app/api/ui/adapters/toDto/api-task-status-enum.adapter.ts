import { TaskStatusEnum } from '../../enums/task-status.enum';
import { ApiTaskStatusEnum } from '../../../swagger/models/api-task-status-enum';

export function adaptApiTaskStatusEnum(source?: TaskStatusEnum | null): ApiTaskStatusEnum {
  switch (source) {
    case TaskStatusEnum.WaitingForRun:
      return ApiTaskStatusEnum.WaitingForRun;
    case TaskStatusEnum.Running:
      return ApiTaskStatusEnum.Running;
    case TaskStatusEnum.CompleteSuccess:
      return ApiTaskStatusEnum.CompleteSuccess;
    case TaskStatusEnum.CompleteSuccessWithWarnings:
      return ApiTaskStatusEnum.CompleteSuccessWithWarnings;
    case TaskStatusEnum.CompleteError:
      return ApiTaskStatusEnum.CompleteError;
    default:
      throw new Error(`Enum value is not defined: TaskStatusEnum=${String(source)}`);
  }
}
