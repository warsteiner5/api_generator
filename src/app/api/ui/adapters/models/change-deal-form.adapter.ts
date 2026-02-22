import { ApiChangeDealFormDto } from '../../../swagger/models/api-change-deal-form-dto';
import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { dealDocumentAdapter } from './deal-document.adapter';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';

export const changeDealFormAdapter = (source?: ApiChangeDealFormDto | null): ChangeDealForm => {
  return {
    cancellationReason: source?.CancellationReason,
    conclusionDate: source?.ConclusionDate,
    dealCustomNumber: source?.DealCustomNumber,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    documents: source?.Documents?.map((item) => dealDocumentAdapter(item)),
    executionFrom: source?.ExecutionFrom,
    executionTo: source?.ExecutionTo,
    id: source?.Id,
    price: source?.Price,
    state: source?.State === null ? undefined : dealStateEnumAdapter(source?.State),
  };
}
