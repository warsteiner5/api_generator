import { BaseFieldAlt } from '../../models/base-field-alt.interface';
import { ApiBaseFieldAltDto } from '../../../swagger/models/api-base-field';
import { apiFieldTypeAltEnumAdapter } from '../enums/api-field-type.adapter';

export const apiBaseFieldAltDtoAdapter = (source?: BaseFieldAlt | null): ApiBaseFieldAltDto => {
  return {
    Name: source?.name,
    Type: source?.type === null ? undefined : apiFieldTypeAltEnumAdapter(source?.type),
  };
}
