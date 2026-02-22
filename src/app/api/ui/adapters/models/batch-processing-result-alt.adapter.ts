import { ApiBatchProcessingResultAltDto } from '../../../swagger/models/api-batch-processing-result';
import { BatchProcessingResultAlt } from '../../models/batch-processing-result-alt.interface';

export const batchProcessingResultAltAdapter = (source?: ApiBatchProcessingResultAltDto | null): BatchProcessingResultAlt => {
  return {
    ignored: source?.Ignored,
    successfull: source?.Successfull,
  };
}
