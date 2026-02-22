import { FinanceSource } from '../../models/finance-source.interface';
import { ApiFinanceSourceDto } from '../../../swagger/models/api-finance-source-dto';

export const apiFinanceSourceDtoAdapter = (source?: FinanceSource | null): ApiFinanceSourceDto => {
  return {
    Code: source?.code,
    Id: source?.id,
    Name: source?.name,
  };
}
