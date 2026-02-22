import { ApiCheckForAvailableGenerateReportResultDto } from '../../../swagger/models/api-check-for-available-generate-report-result-dto';
import { CheckForAvailableGenerateReportResult } from '../../models/check-for-available-generate-report-result.interface';

export const checkForAvailableGenerateReportResultAdapter = (source?: ApiCheckForAvailableGenerateReportResultDto | null): CheckForAvailableGenerateReportResult => {
  return {
    checkResult: source?.CheckResult,
  };
}
