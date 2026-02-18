import { adaptFileInfoForSignToUI } from '../adapters/toUI/file-info-for-sign.adapter';
import { FileInfoForSign } from '../models/file-info-for-sign.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuotationSessionAgreementApiService } from '../../swagger/services/quotation-session-agreement-api.service';
import { QuotationSessionAgreementGetDataForSignParams, quotationSessionAgreementGetDataForSignParamsAdapter } from './params/quotation-session-agreement-get-data-for-sign.params';

@Injectable({ providedIn: 'root' })
export class QuotationSessionAgreementRepository {
  private readonly _api = inject(QuotationSessionAgreementApiService);

  quotationSessionAgreementGetDataForSign(params: QuotationSessionAgreementGetDataForSignParams): Observable<FileInfoForSign> {
    return this._api.quotationSessionAgreementGetDataForSign(quotationSessionAgreementGetDataForSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFileInfoForSignToUI(res?.data))
    );
  }

}
