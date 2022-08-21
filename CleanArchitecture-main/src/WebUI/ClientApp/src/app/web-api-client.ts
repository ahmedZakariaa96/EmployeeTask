//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.0.0 (NJsonSchema v10.7.1.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IEmployeesClient {
    getAllEmployees(pageNumber: number | undefined, pageSize: number | undefined): Observable<PaginatedListOfSetupDTo>;
    createEmployee(createEmployee: CreateEmployee): Observable<Result>;
    updateEmployee(updateEmployees: UpdateEmployee): Observable<Result>;
    deleteEmployee(id: number | undefined): Observable<Result>;
}

@Injectable({
    providedIn: 'root'
})
export class EmployeesClient implements IEmployeesClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    getAllEmployees(pageNumber: number | undefined, pageSize: number | undefined): Observable<PaginatedListOfSetupDTo> {
        let url_ = this.baseUrl + "/api/Employees/Api/Employees/GetAll?";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "PageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "PageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllEmployees(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllEmployees(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<PaginatedListOfSetupDTo>;
                }
            } else
                return _observableThrow(response_) as any as Observable<PaginatedListOfSetupDTo>;
        }));
    }

    protected processGetAllEmployees(response: HttpResponseBase): Observable<PaginatedListOfSetupDTo> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = PaginatedListOfSetupDTo.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    createEmployee(createEmployee: CreateEmployee): Observable<Result> {
        let url_ = this.baseUrl + "/api/Employees/Api/Employees/Create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(createEmployee);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateEmployee(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateEmployee(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Result>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Result>;
        }));
    }

    protected processCreateEmployee(response: HttpResponseBase): Observable<Result> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Result.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    updateEmployee(updateEmployees: UpdateEmployee): Observable<Result> {
        let url_ = this.baseUrl + "/api/Employees/Api/Employees/Update";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(updateEmployees);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdateEmployee(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdateEmployee(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Result>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Result>;
        }));
    }

    protected processUpdateEmployee(response: HttpResponseBase): Observable<Result> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Result.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    deleteEmployee(id: number | undefined): Observable<Result> {
        let url_ = this.baseUrl + "/api/Employees/Api/Employees/Delete?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDeleteEmployee(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDeleteEmployee(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<Result>;
                }
            } else
                return _observableThrow(response_) as any as Observable<Result>;
        }));
    }

    protected processDeleteEmployee(response: HttpResponseBase): Observable<Result> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Result.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class PaginatedListOfSetupDTo implements IPaginatedListOfSetupDTo {
    items?: SetupDTo[];
    pageNumber?: number;
    totalPages?: number;
    totalCount?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;

    constructor(data?: IPaginatedListOfSetupDTo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["items"])) {
                this.items = [] as any;
                for (let item of _data["items"])
                    this.items!.push(SetupDTo.fromJS(item));
            }
            this.pageNumber = _data["pageNumber"];
            this.totalPages = _data["totalPages"];
            this.totalCount = _data["totalCount"];
            this.hasPreviousPage = _data["hasPreviousPage"];
            this.hasNextPage = _data["hasNextPage"];
        }
    }

    static fromJS(data: any): PaginatedListOfSetupDTo {
        data = typeof data === 'object' ? data : {};
        let result = new PaginatedListOfSetupDTo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items)
                data["items"].push(item.toJSON());
        }
        data["pageNumber"] = this.pageNumber;
        data["totalPages"] = this.totalPages;
        data["totalCount"] = this.totalCount;
        data["hasPreviousPage"] = this.hasPreviousPage;
        data["hasNextPage"] = this.hasNextPage;
        return data;
    }
}

export interface IPaginatedListOfSetupDTo {
    items?: SetupDTo[];
    pageNumber?: number;
    totalPages?: number;
    totalCount?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;
}

export class SetupDTo implements ISetupDTo {
    id?: number;
    code?: string;
    latinName?: string | undefined;
    arabicName?: string | undefined;
    active?: boolean | undefined;
    isOpenForEdit?: boolean | undefined;

    constructor(data?: ISetupDTo) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.code = _data["code"];
            this.latinName = _data["latinName"];
            this.arabicName = _data["arabicName"];
            this.active = _data["active"];
            this.isOpenForEdit = _data["isOpenForEdit"];
        }
    }

    static fromJS(data: any): SetupDTo {
        data = typeof data === 'object' ? data : {};
        let result = new SetupDTo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["code"] = this.code;
        data["latinName"] = this.latinName;
        data["arabicName"] = this.arabicName;
        data["active"] = this.active;
        data["isOpenForEdit"] = this.isOpenForEdit;
        return data;
    }
}

export interface ISetupDTo {
    id?: number;
    code?: string;
    latinName?: string | undefined;
    arabicName?: string | undefined;
    active?: boolean | undefined;
    isOpenForEdit?: boolean | undefined;
}

export class Result implements IResult {
    succeeded?: boolean;
    statusResult?: StatusResult;
    errors?: string[];

    constructor(data?: IResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.succeeded = _data["succeeded"];
            this.statusResult = _data["statusResult"];
            if (Array.isArray(_data["errors"])) {
                this.errors = [] as any;
                for (let item of _data["errors"])
                    this.errors!.push(item);
            }
        }
    }

    static fromJS(data: any): Result {
        data = typeof data === 'object' ? data : {};
        let result = new Result();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["succeeded"] = this.succeeded;
        data["statusResult"] = this.statusResult;
        if (Array.isArray(this.errors)) {
            data["errors"] = [];
            for (let item of this.errors)
                data["errors"].push(item);
        }
        return data;
    }
}

export interface IResult {
    succeeded?: boolean;
    statusResult?: StatusResult;
    errors?: string[];
}

export enum StatusResult {
    Falid = 0,
    Success = 1,
    RelatedData = 2,
    Exist = 3,
    NotExists = 4,
    ApplicationException = 5,
}

export class CreateEmployee implements ICreateEmployee {
    code?: string;
    latinName?: string | undefined;
    arabicName?: string | undefined;
    active?: boolean | undefined;

    constructor(data?: ICreateEmployee) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.code = _data["code"];
            this.latinName = _data["latinName"];
            this.arabicName = _data["arabicName"];
            this.active = _data["active"];
        }
    }

    static fromJS(data: any): CreateEmployee {
        data = typeof data === 'object' ? data : {};
        let result = new CreateEmployee();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["code"] = this.code;
        data["latinName"] = this.latinName;
        data["arabicName"] = this.arabicName;
        data["active"] = this.active;
        return data;
    }
}

export interface ICreateEmployee {
    code?: string;
    latinName?: string | undefined;
    arabicName?: string | undefined;
    active?: boolean | undefined;
}

export class UpdateEmployee implements IUpdateEmployee {
    id?: number;
    code?: string;
    latinName?: string | undefined;
    arabicName?: string | undefined;
    active?: boolean | undefined;

    constructor(data?: IUpdateEmployee) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.code = _data["code"];
            this.latinName = _data["latinName"];
            this.arabicName = _data["arabicName"];
            this.active = _data["active"];
        }
    }

    static fromJS(data: any): UpdateEmployee {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateEmployee();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["code"] = this.code;
        data["latinName"] = this.latinName;
        data["arabicName"] = this.arabicName;
        data["active"] = this.active;
        return data;
    }
}

export interface IUpdateEmployee {
    id?: number;
    code?: string;
    latinName?: string | undefined;
    arabicName?: string | undefined;
    active?: boolean | undefined;
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}