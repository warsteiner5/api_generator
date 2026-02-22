import { SegmentsParseSegmentFormExcel$Params } from '../../../swagger/fn/segments/segments-parse-segment-form-excel';

// @ts-ignore
export interface SegmentsParseSegmentFormExcelParams {
  fileGuid: string;
}

export function segmentsParseSegmentFormExcelAdapter(params?: SegmentsParseSegmentFormExcelParams): SegmentsParseSegmentFormExcel$Params {
  if (!params) {
    return {} as SegmentsParseSegmentFormExcel$Params;
  }
  return {
      fileGuid: params.fileGuid,
  };
}
