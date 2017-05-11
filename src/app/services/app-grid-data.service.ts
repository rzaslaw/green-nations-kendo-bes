import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Everlive from 'everlive-sdk';
import { State } from '@progress/kendo-data-query';
import 'rxjs/add/operator/map';

export abstract class AppGridDataService extends BehaviorSubject<GridDataResult> {
    private BASE_URL: string = 'https://api.everlive.com/v1/ejdvn0vq0t4dw3y4/';

    constructor(private http: Http, private tableName: string) {
        super(null);
    }

    private filterToString({ filter }: { filter?: string }): string {
        return filter ? `&$filter=${filter}` : '';
    }

    public fetchData(state: State): Observable<GridDataResult> {
        var el = new Everlive('ejdvn0vq0t4dw3y4');
        var data = el.data('Countries');
        var query = new Everlive.Query();
        query.skip(state.skip).take(state.take);
        if(state.sort){
            state.sort.forEach((sortElement)=>{
                if(sortElement.dir === "asc"){
                    query.order(sortElement.field);
                }
                else if(sortElement.dir ==="desc") {
                    query.orderDesc(sortElement.field);
                }
            })
        }
        return Observable.fromPromise(data.get(query)).map(returnedData => <GridDataResult>{data:returnedData.result, total:returnedData.count});
    }
}

@Injectable()
export class CountriesService extends AppGridDataService {
    constructor(http: Http) { super(http, "Countries"); }
}

