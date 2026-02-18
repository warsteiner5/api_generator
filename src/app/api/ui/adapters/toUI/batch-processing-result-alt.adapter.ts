import { ApiBatchProcessingResultAltDto } from '../../../swagger/models/api-batch-processing-result';
import { BatchProcessingResultAlt } from '../../models/batch-processing-result-alt.interface';

export function adaptBatchProcessingResultAltToUI(source?: ApiBatchProcessingResultAltDto | null): BatchProcessingResultAlt {
  return {
    ignored: source?.Ignored ?? 0,
    successfull: source?.Successfull ?? 0,
  };
}
