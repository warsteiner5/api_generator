import { ApiLotSaveResultAltDto } from '../../../swagger/models/api-lot-save-result';
import { LotSaveResultAlt } from '../../models/lot-save-result-alt.interface';
import { saveResultOfIntegerAltAdapter } from './save-result-of-integer-alt.adapter';

export const lotSaveResultAltAdapter = (source?: ApiLotSaveResultAltDto | null): LotSaveResultAlt => {
  return {
    ...saveResultOfIntegerAltAdapter(source as unknown as Parameters<typeof saveResultOfIntegerAltAdapter>[0]),
    customers: source?.Customers?.map((item) => saveResultOfIntegerAltAdapter(item)),
    items: source?.Items?.map((item) => saveResultOfIntegerAltAdapter(item)),
  };
}
