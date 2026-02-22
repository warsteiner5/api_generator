import { LotSaveResultAlt } from '../../models/lot-save-result-alt.interface';
import { ApiLotSaveResultAltDto } from '../../../swagger/models/api-lot-save-result';

export const apiLotSaveResultAltDtoAdapter = (source?: LotSaveResultAlt | null): ApiLotSaveResultAltDto => {
  return (source ?? {}) as ApiLotSaveResultAltDto;
}
