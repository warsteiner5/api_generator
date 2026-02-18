import { ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltDto } from '../../../swagger/models/api-base-contract-dto-with-id-and-row-version-of-integer-and-integer';
import { BaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAlt } from '../../models/base-contract-dto-with-id-and-row-version-of-integer-and-integer-alt.interface';

export function adaptBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltToUI(source?: ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAltDto | null): BaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAlt {
  return {
    id: source?.Id ?? 0,
    rowVersion: source?.RowVersion ?? 0,
  };
}
