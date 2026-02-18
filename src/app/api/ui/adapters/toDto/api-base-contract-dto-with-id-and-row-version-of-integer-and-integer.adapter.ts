import { BaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAlt } from '../../models/base-contract-dto-with-id-and-row-version-of-integer-and-integer-alt.interface';
import { ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltDto } from '../../../swagger/models/api-base-contract-dto-with-id-and-row-version-of-integer-and-integer';

export function adaptApiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltDto(source?: BaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAlt | null): ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltDto {
  return {
    Id: source?.id,
    RowVersion: source?.rowVersion,
  };
}
