import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SuggestAddressParams, suggestAddressAdapter } from './params/suggest-address.params';
import { SuggestApiService } from '../../swagger/services/suggest-api.service';
import { SuggestBankParams, suggestBankAdapter } from './params/suggest-bank.params';
import { SuggestEmailParams, suggestEmailAdapter } from './params/suggest-email.params';
import { SuggestFioParams, suggestFioAdapter } from './params/suggest-fio.params';
import { SuggestPartyParams, suggestPartyAdapter } from './params/suggest-party.params';
import { SuggestStatus2Params, suggestStatus2Adapter } from './params/suggest-status-2.params';
import { SuggestStatusParams, suggestStatusAdapter } from './params/suggest-status.params';

@Injectable({ providedIn: 'root' })
export class SuggestRepository {
  private readonly _api = inject(SuggestApiService);

  suggestAddress(params?: SuggestAddressParams): Observable<Blob> {
    return this._api.suggestAddress(suggestAddressAdapter(params));
  }

  suggestBank(params?: SuggestBankParams): Observable<Blob> {
    return this._api.suggestBank(suggestBankAdapter(params));
  }

  suggestEmail(params?: SuggestEmailParams): Observable<Blob> {
    return this._api.suggestEmail(suggestEmailAdapter(params));
  }

  suggestFio(params?: SuggestFioParams): Observable<Blob> {
    return this._api.suggestFio(suggestFioAdapter(params));
  }

  suggestParty(params?: SuggestPartyParams): Observable<Blob> {
    return this._api.suggestParty(suggestPartyAdapter(params));
  }

  suggestStatus(params?: SuggestStatusParams): Observable<Blob> {
    return this._api.suggestStatus(suggestStatusAdapter(params));
  }

  suggestStatus2(params?: SuggestStatus2Params): Observable<Blob> {
    return this._api.suggestStatus2(suggestStatus2Adapter(params));
  }

}
