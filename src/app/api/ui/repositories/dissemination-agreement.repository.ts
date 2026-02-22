import { DisseminationAgreementApiService } from '../../swagger/services/dissemination-agreement-api.service';
import { DisseminationAgreementConfirmParams, disseminationAgreementConfirmAdapter } from './params/dissemination-agreement-confirm.params';
import { DisseminationAgreementExistParams, disseminationAgreementExistAdapter } from './params/dissemination-agreement-exist.params';
import { DisseminationAgreementGetPdfParams, disseminationAgreementGetPdfAdapter } from './params/dissemination-agreement-get-pdf.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DisseminationAgreementRepository {
  private readonly _api = inject(DisseminationAgreementApiService);

  disseminationAgreementConfirm(params?: DisseminationAgreementConfirmParams): Observable<Blob> {
    return this._api.disseminationAgreementConfirm(disseminationAgreementConfirmAdapter(params));
  }

  disseminationAgreementExist(params?: DisseminationAgreementExistParams): Observable<Blob> {
    return this._api.disseminationAgreementExist(disseminationAgreementExistAdapter(params));
  }

  disseminationAgreementGetPdf(params?: DisseminationAgreementGetPdfParams): Observable<Blob> {
    return this._api.disseminationAgreementGetPdf(disseminationAgreementGetPdfAdapter(params));
  }

}
