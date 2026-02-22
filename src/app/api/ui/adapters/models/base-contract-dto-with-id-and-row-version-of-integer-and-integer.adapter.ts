import { ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndInteger } from '../../../swagger/models/api-base-contract-dto-with-id-and-row-version-of-integer-and-integer';
import { BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger } from '../../models/base-contract-dto-with-id-and-row-version-of-integer-and-integer.interface';

export const baseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter = (source?: ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndInteger | null): BaseContractDtoWithIdAndRowVersionOfIntegerAndInteger => {
  return {
    id: source?.Id,
    rowVersion: source?.RowVersion,
  };
}
