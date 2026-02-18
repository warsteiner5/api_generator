import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SuggestAddressParams, suggestAddressParamsAdapter } from './params/suggest-address.params';
import { SuggestApiService } from '../../swagger/services/suggest-api.service';
import { SuggestBankParams, suggestBankParamsAdapter } from './params/suggest-bank.params';
import { SuggestEmailParams, suggestEmailParamsAdapter } from './params/suggest-email.params';
import { SuggestFioParams, suggestFioParamsAdapter } from './params/suggest-fio.params';
import { SuggestPartyParams, suggestPartyParamsAdapter } from './params/suggest-party.params';
import { SuggestStatus2Params, suggestStatus2ParamsAdapter } from './params/suggest-status-2.params';
import { SuggestStatusParams, suggestStatusParamsAdapter } from './params/suggest-status.params';

@Injectable({ providedIn: 'root' })
export class SuggestRepository {
  private readonly _api = inject(SuggestApiService);

  suggestAddress(params?: SuggestAddressParams): Observable<Blob> {
    return this._api.suggestAddress(suggestAddressParamsAdapter.adapt(params));
  }

  suggestBank(params?: SuggestBankParams): Observable<Blob> {
    return this._api.suggestBank(suggestBankParamsAdapter.adapt(params));
  }

  suggestEmail(params?: SuggestEmailParams): Observable<Blob> {
    return this._api.suggestEmail(suggestEmailParamsAdapter.adapt(params));
  }

  suggestFio(params?: SuggestFioParams): Observable<Blob> {
    return this._api.suggestFio(suggestFioParamsAdapter.adapt(params));
  }

  suggestParty(params?: SuggestPartyParams): Observable<Blob> {
    return this._api.suggestParty(suggestPartyParamsAdapter.adapt(params));
  }

  suggestStatus(params?: SuggestStatusParams): Observable<Blob> {
    return this._api.suggestStatus(suggestStatusParamsAdapter.adapt(params));
  }

  suggestStatus2(params?: SuggestStatus2Params): Observable<Blob> {
    return this._api.suggestStatus2(suggestStatus2ParamsAdapter.adapt(params));
  }

}
