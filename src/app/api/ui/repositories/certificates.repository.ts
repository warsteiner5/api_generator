import { adaptParsedCertificateToUI } from '../adapters/toUI/parsed-certificate.adapter';
import { CertificatesApiService } from '../../swagger/services/certificates-api.service';
import { CertificatesDownloadCertificateParams, certificatesDownloadCertificateParamsAdapter } from './params/certificates-download-certificate.params';
import { CertificatesDownloadParams, certificatesDownloadParamsAdapter } from './params/certificates-download.params';
import { CertificatesParseGetParams, certificatesParseGetParamsAdapter } from './params/certificates-parse-get.params';
import { CertificatesParsePostParams, certificatesParsePostParamsAdapter } from './params/certificates-parse-post.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParsedCertificate } from '../models/parsed-certificate.interface';

@Injectable({ providedIn: 'root' })
export class CertificatesRepository {
  private readonly _api = inject(CertificatesApiService);

  certificatesDownload(params: CertificatesDownloadParams): Observable<Blob> {
    return this._api.certificatesDownload(certificatesDownloadParamsAdapter.adapt(params));
  }

  certificatesDownloadCertificate(params: CertificatesDownloadCertificateParams): Observable<Blob> {
    return this._api.certificatesDownloadCertificate(certificatesDownloadCertificateParamsAdapter.adapt(params));
  }

  certificatesParseGet(params: CertificatesParseGetParams): Observable<ParsedCertificate> {
    return this._api.certificatesParseGet(certificatesParseGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptParsedCertificateToUI(res?.data))
    );
  }

  certificatesParsePost(params: CertificatesParsePostParams): Observable<ParsedCertificate> {
    return this._api.certificatesParsePost(certificatesParsePostParamsAdapter.adapt(params)).pipe(
      map((res) => adaptParsedCertificateToUI(res?.data))
    );
  }

}
