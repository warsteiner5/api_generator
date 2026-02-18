import { ApiFinanceSourceDto } from '../../../swagger/models/api-finance-source-dto';
import { FinanceSource } from '../../models/finance-source.interface';

export function adaptFinanceSourceToUI(source?: ApiFinanceSourceDto | null): FinanceSource {
  return {
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}
