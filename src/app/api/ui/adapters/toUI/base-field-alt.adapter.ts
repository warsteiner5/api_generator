import { ApiBaseFieldAltDto } from '../../../swagger/models/api-base-field';
import { BaseFieldAlt } from '../../models/base-field-alt.interface';
import { adaptFieldTypeAltEnumToUI } from './field-type-alt-enum.adapter';

export function adaptBaseFieldAltToUI(source?: ApiBaseFieldAltDto | null): BaseFieldAlt {
  return {
    name: source?.Name ?? '',
    type: adaptFieldTypeAltEnumToUI(source?.Type),
  };
}
