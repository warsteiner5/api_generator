import { BaseFieldAlt } from '../../models/base-field-alt.interface';
import { ApiBaseFieldAltDto } from '../../../swagger/models/api-base-field';
import { adaptApiFieldTypeAltEnum } from './api-field-type.adapter';

export function adaptApiBaseFieldAltDto(source?: BaseFieldAlt | null): ApiBaseFieldAltDto {
  return {
    Name: source?.name,
    Type: adaptApiFieldTypeAltEnum(source?.type),
  };
}
