import { SegmentsGetById$Params } from '../../../swagger/fn/segments/segments-get-by-id';

export interface SegmentsGetByIdParams {
  id: number;
}

export const segmentsGetByIdParamsAdapter = {
  adapt(params?: SegmentsGetByIdParams): SegmentsGetById$Params {
    if (!params) {
      return {} as SegmentsGetById$Params;
    }
    return {
      id: params.id,
    };
  }
};
