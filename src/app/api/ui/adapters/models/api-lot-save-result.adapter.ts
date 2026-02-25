import { LotSaveResultAlt } from '../../models/lot-save-result-alt.interface';
import { ApiLotSaveResultAltDto } from '../../../swagger/models/api-lot-save-result';
import { apiSaveResultOfIntegerAltDtoAdapter } from './api-save-result-of-integer.adapter';

export const apiLotSaveResultAltDtoAdapter = (source?: LotSaveResultAlt | null): ApiLotSaveResultAltDto => {
  return {
    ...apiSaveResultOfIntegerAltDtoAdapter(source as unknown as Parameters<typeof apiSaveResultOfIntegerAltDtoAdapter>[0]),
    Customers: source?.customers?.map((item) => apiSaveResultOfIntegerAltDtoAdapter(item)),
    Items: source?.items?.map((item) => apiSaveResultOfIntegerAltDtoAdapter(item)),
  };
}
