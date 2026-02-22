import { SegmentsGetById$Params } from '../../../swagger/fn/segments/segments-get-by-id';

// @ts-ignore
export interface SegmentsGetByIdParams {
  id: number;
}

export function segmentsGetByIdAdapter(params?: SegmentsGetByIdParams): SegmentsGetById$Params {
  if (!params) {
    return {} as SegmentsGetById$Params;
  }
  return {
      id: params.id,
  };
}
