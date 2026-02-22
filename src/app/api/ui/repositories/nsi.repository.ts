import { AddressDto2 } from '../models/address-dto-2.interface';
import { addressDto2Adapter } from '../adapters/models/address-dto-2.adapter';
import { Country } from '../models/country.interface';
import { countryAdapter } from '../adapters/models/country.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NsiApiService } from '../../swagger/services/nsi-api.service';
import { NsiCleanAddressParams, nsiCleanAddressAdapter } from './params/nsi-clean-address.params';
import { NsiFindOrganizationParams, nsiFindOrganizationAdapter } from './params/nsi-find-organization.params';
import { NsiGetCountryParams, nsiGetCountryAdapter } from './params/nsi-get-country.params';
import { NsiSearchCountryParams, nsiSearchCountryAdapter } from './params/nsi-search-country.params';
import { NsiSuggestAddressParams, nsiSuggestAddressAdapter } from './params/nsi-suggest-address.params';
import { NsiSuggestBankParams, nsiSuggestBankAdapter } from './params/nsi-suggest-bank.params';
import { NsiSuggestOrganizationParams, nsiSuggestOrganizationAdapter } from './params/nsi-suggest-organization.params';
import { Observable } from 'rxjs';
import { Organization } from '../models/organization.interface';
import { organizationAdapter } from '../adapters/models/organization.adapter';
import { SuggestResponseOfAddress } from '../models/suggest-response-of-address.interface';
import { suggestResponseOfAddressAdapter } from '../adapters/models/suggest-response-of-address.adapter';
import { SuggestResponseOfBankSuggest } from '../models/suggest-response-of-bank-suggest.interface';
import { suggestResponseOfBankSuggestAdapter } from '../adapters/models/suggest-response-of-bank-suggest.adapter';
import { SuggestResponseOfOrganizationSuggest } from '../models/suggest-response-of-organization-suggest.interface';
import { suggestResponseOfOrganizationSuggestAdapter } from '../adapters/models/suggest-response-of-organization-suggest.adapter';

@Injectable({ providedIn: 'root' })
export class NsiRepository {
  private readonly _api = inject(NsiApiService);

  nsiCleanAddress(params: NsiCleanAddressParams): Observable<AddressDto2> {
    return this._api.nsiCleanAddress(nsiCleanAddressAdapter(params)).pipe(
      map((res) => addressDto2Adapter(res?.data))
    );
  }

  nsiFindOrganization(params: NsiFindOrganizationParams): Observable<Organization[]> {
    return this._api.nsiFindOrganization(nsiFindOrganizationAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => organizationAdapter(item)))
    );
  }

  nsiGetCountry(params?: NsiGetCountryParams): Observable<Country[]> {
    return this._api.nsiGetCountry(nsiGetCountryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => countryAdapter(item)))
    );
  }

  nsiSearchCountry(params: NsiSearchCountryParams): Observable<Country[]> {
    return this._api.nsiSearchCountry(nsiSearchCountryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => countryAdapter(item)))
    );
  }

  nsiSuggestAddress(params: NsiSuggestAddressParams): Observable<SuggestResponseOfAddress> {
    return this._api.nsiSuggestAddress(nsiSuggestAddressAdapter(params)).pipe(
      map((res) => suggestResponseOfAddressAdapter(res?.data))
    );
  }

  nsiSuggestBank(params: NsiSuggestBankParams): Observable<SuggestResponseOfBankSuggest> {
    return this._api.nsiSuggestBank(nsiSuggestBankAdapter(params)).pipe(
      map((res) => suggestResponseOfBankSuggestAdapter(res?.data))
    );
  }

  nsiSuggestOrganization(params: NsiSuggestOrganizationParams): Observable<SuggestResponseOfOrganizationSuggest> {
    return this._api.nsiSuggestOrganization(nsiSuggestOrganizationAdapter(params)).pipe(
      map((res) => suggestResponseOfOrganizationSuggestAdapter(res?.data))
    );
  }

}
