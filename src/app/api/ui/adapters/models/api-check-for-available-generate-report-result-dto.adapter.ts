import { CheckForAvailableGenerateReportResult } from '../../models/check-for-available-generate-report-result.interface';
import { ApiCheckForAvailableGenerateReportResultDto } from '../../../swagger/models/api-check-for-available-generate-report-result-dto';

export const apiCheckForAvailableGenerateReportResultDtoAdapter = (source?: CheckForAvailableGenerateReportResult | null): ApiCheckForAvailableGenerateReportResultDto => {
  return {
    CheckResult: source?.checkResult,
  };
}
