import { SegmentsParseSegmentFormExcel$Params } from '../../../swagger/fn/segments/segments-parse-segment-form-excel';

export interface SegmentsParseSegmentFormExcelParams {
  fileGuid: string;
}

export const segmentsParseSegmentFormExcelParamsAdapter = {
  adapt(params?: SegmentsParseSegmentFormExcelParams): SegmentsParseSegmentFormExcel$Params {
    if (!params) {
      return {} as SegmentsParseSegmentFormExcel$Params;
    }
    return {
      fileGuid: params.fileGuid,
    };
  }
};
