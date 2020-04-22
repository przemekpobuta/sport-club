import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface RestServiceInterface<T, ID> {
  getAll(): Observable<T[]>;
  post(item: T): Observable<T>;
  get(id: ID): Observable<T>;
  put(id: ID, item: T): Observable<T>;
  delete(id: ID): Observable<T>;
}

interface RestResource {
  module: string;
}

export class RestService<T, ID = number>
  implements RestServiceInterface<T, ID> {
  protected _httpClient: HttpClient;

  constructor(
    protected _injector: Injector,
    protected _serviceConfiguration: RestResource
  ) {
    this._httpClient = _injector.get(HttpClient);
    console.log('Resource endpoint URL:', this.generateEndpointUrl());
  }

  post(
    item: Partial<T> | FormData,
    contentType = 'application/json'
  ): Observable<T> {
    this.logRequest('post', { item });
    if (item instanceof FormData) {
      return this._httpClient
        .post<T>(`${this.generateEndpointUrl()}`, item)
        .pipe(tap(value => this.logResponse('post', value)));
    }

    return this._httpClient
      .post<T>(`${this.generateEndpointUrl()}`, item, {
        headers: new HttpHeaders().set('Content-Type', contentType)
      })
      .pipe(tap(value => this.logResponse('post', value)));
  }

  get(id: ID): Observable<T> {
    this.logRequest('get', { id });
    return this._httpClient
      .get<T>(`${this.generateEndpointUrl()}/${id}`)
      .pipe(tap(value => this.logResponse('get', value)));
  }

  put(id: ID, item: Partial<T>): Observable<T> {
    this.logRequest('put', { id, item });
    return this._httpClient
      .put<T>(`${this.generateEndpointUrl()}/${id}`, item)
      .pipe(tap(value => this.logResponse('put', value)));
  }

  delete(id: ID): Observable<T> {
    this.logRequest('delete', { id });
    return this._httpClient
      .delete<T>(`${this.generateEndpointUrl()}/${id}`)
      .pipe(tap(value => this.logResponse('delete', value)));
  }

  getAll(): Observable<T[]> {
    this.logRequest('getAll');
    return this._httpClient
      .get<T[]>(`${this.generateEndpointUrl()}`)
      .pipe(tap(value => this.logResponse('getAll', value)));
  }

  protected generateEndpointUrl(): string {
    return `/api/${this._serviceConfiguration.module}`;
  }

  protected logRequest(method?: string, message?: any): void {
    console.log(
      `[${this._serviceConfiguration.module}] RestService Request ${method}`,
      message
    );
  }

  protected logResponse(method?: string, message?: any): void {
    console.log(
      `[${this._serviceConfiguration.module}] RestService Response ${method}`,
      message
    );
  }
}
