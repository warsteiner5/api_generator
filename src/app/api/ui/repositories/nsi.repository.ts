import { adaptAddressDto2ToUI } from '../adapters/toUI/address-dto-2.adapter';
import { adaptCountryToUI } from '../adapters/toUI/country.adapter';
import { adaptOrganizationToUI } from '../adapters/toUI/organization.adapter';
import { adaptSuggestResponseOfAddressToUI } from '../adapters/toUI/suggest-response-of-address.adapter';
import { adaptSuggestResponseOfBankSuggestToUI } from '../adapters/toUI/suggest-response-of-bank-suggest.adapter';
import { adaptSuggestResponseOfOrganizationSuggestToUI } from '../adapters/toUI/suggest-response-of-organization-suggest.adapter';
import { AddressDto2 } from '../models/address-dto-2.interface';
import { Country } from '../models/country.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NsiApiService } from '../../swagger/services/nsi-api.service';
import { NsiCleanAddressParams, nsiCleanAddressParamsAdapter } from './params/nsi-clean-address.params';
import { NsiFindOrganizationParams, nsiFindOrganizationParamsAdapter } from './params/nsi-find-organization.params';
import { NsiGetCountryParams, nsiGetCountryParamsAdapter } from './params/nsi-get-country.params';
import { NsiSearchCountryParams, nsiSearchCountryParamsAdapter } from './params/nsi-search-country.params';
import { NsiSuggestAddressParams, nsiSuggestAddressParamsAdapter } from './params/nsi-suggest-address.params';
import { NsiSuggestBankParams, nsiSuggestBankParamsAdapter } from './params/nsi-suggest-bank.params';
import { NsiSuggestOrganizationParams, nsiSuggestOrganizationParamsAdapter } from './params/nsi-suggest-organization.params';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization.interface';
import { SuggestResponseOfAddress } from '../models/suggest-response-of-address.interface';
import { SuggestResponseOfBankSuggest } from '../models/suggest-response-of-bank-suggest.interface';
import { SuggestResponseOfOrganizationSuggest } from '../models/suggest-response-of-organization-suggest.interface';

@Injectable({ providedIn: 'root' })
export class NsiRepository {
  private readonly _api = inject(NsiApiService);

  nsiCleanAddress(params: NsiCleanAddressParams): Observable<AddressDto2> {
    return this._api.nsiCleanAddress(nsiCleanAddressParamsAdapter.adapt(params)).pipe(
      map((res) => adaptAddressDto2ToUI(res?.data))
    );
  }

  nsiFindOrganization(params: NsiFindOrganizationParams): Observable<Organization[]> {
    return this._api.nsiFindOrganization(nsiFindOrganizationParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOrganizationToUI(item)))
    );
  }

  nsiGetCountry(params?: NsiGetCountryParams): Observable<Country[]> {
    return this._api.nsiGetCountry(nsiGetCountryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCountryToUI(item)))
    );
  }

  nsiSearchCountry(params: NsiSearchCountryParams): Observable<Country[]> {
    return this._api.nsiSearchCountry(nsiSearchCountryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCountryToUI(item)))
    );
  }

  nsiSuggestAddress(params: NsiSuggestAddressParams): Observable<SuggestResponseOfAddress> {
    return this._api.nsiSuggestAddress(nsiSuggestAddressParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSuggestResponseOfAddressToUI(res?.data))
    );
  }

  nsiSuggestBank(params: NsiSuggestBankParams): Observable<SuggestResponseOfBankSuggest> {
    return this._api.nsiSuggestBank(nsiSuggestBankParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSuggestResponseOfBankSuggestToUI(res?.data))
    );
  }

  nsiSuggestOrganization(params: NsiSuggestOrganizationParams): Observable<SuggestResponseOfOrganizationSuggest> {
    return this._api.nsiSuggestOrganization(nsiSuggestOrganizationParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSuggestResponseOfOrganizationSuggestToUI(res?.data))
    );
  }

}
