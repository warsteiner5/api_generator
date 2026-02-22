import { ApiBaseFieldAltDto } from '../../../swagger/models/api-base-field';
import { BaseFieldAlt } from '../../models/base-field-alt.interface';
import { fieldTypeAltEnumAdapter } from '../enums/field-type-alt-enum.adapter';

export const baseFieldAltAdapter = (source?: ApiBaseFieldAltDto | null): BaseFieldAlt => {
  return {
    name: source?.Name,
    type: source?.Type === null ? undefined : fieldTypeAltEnumAdapter(source?.Type),
  };
}
