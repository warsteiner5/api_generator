import { ApiLotSaveResultAltDto } from '../../../swagger/models/api-lot-save-result';
import { LotSaveResultAlt } from '../../models/lot-save-result-alt.interface';

export function adaptLotSaveResultAltToUI(source?: ApiLotSaveResultAltDto | null): LotSaveResultAlt {
  return (source ?? {}) as LotSaveResultAlt;
}
