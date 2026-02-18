import { BatchProcessingResultAlt } from '../../models/batch-processing-result-alt.interface';
import { ApiBatchProcessingResultAltDto } from '../../../swagger/models/api-batch-processing-result';

export function adaptApiBatchProcessingResultAltDto(source?: BatchProcessingResultAlt | null): ApiBatchProcessingResultAltDto {
  return {
    Ignored: source?.ignored,
    Successfull: source?.successfull,
  };
}
