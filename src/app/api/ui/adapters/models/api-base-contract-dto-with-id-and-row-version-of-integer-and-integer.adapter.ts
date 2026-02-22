import { BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger } from '../../models/base-contract-dto-with-id-and-row-version-of-integer-and-integer.interface';
import { ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndInteger } from '../../../swagger/models/api-base-contract-dto-with-id-and-row-version-of-integer-and-integer';

export const apiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter = (source?: BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger | null): ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndInteger => {
  return {
    Id: source?.id,
    RowVersion: source?.rowVersion,
  };
}
