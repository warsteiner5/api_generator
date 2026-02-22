import { ApiFinanceSourceDto } from '../../../swagger/models/api-finance-source-dto';
import { FinanceSource } from '../../models/finance-source.interface';

export const financeSourceAdapter = (source?: ApiFinanceSourceDto | null): FinanceSource => {
  return {
    code: source?.Code,
    id: source?.Id,
    name: source?.Name,
  };
}
