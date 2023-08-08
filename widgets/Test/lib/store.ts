import { action, makeAutoObservable } from "mobx";
import * as types from "../../../shared/api/types";

export class Store {
    private _news: any = [];
    private _page: number = 1;
    private _q:string = '';
    private _loader: number | boolean = false;
    private _category: types.categories | null = null;
    private _pageCount: number | null = null;

    constructor() {
        makeAutoObservable(this);
        this.setList = this.setList.bind(this);
        this.setPage = this.setPage.bind(this);
        this.setLoader = this.setLoader.bind(this);
        this.setCategory = this.setCategory.bind(this);
        this.setPageCount = this.setPageCount.bind(this);
        this.setQ = this.setQ.bind(this);
    }

    public get list(): types.NewsItem[] {
        return this._news;
    }

    public setList(value: types.NewsItem[]): void {
        this._news = value;
    }

    public get q(): string {
        return this._q;
    }

    public setQ(value: string): void {
        this._q = value;
    }


    public get page(): number {
        return this._page;
    }

    public setPage(value: number): void {
        this._page = value;
    }

    public get category(): types.categories | null {
        return this._category;
    }

    public setCategory(value: types.categories | null): void {
        this._category = value;
    }

    public get pageCount(): number | null {
        return this._pageCount;
    }

    public setPageCount(pageCount: number): void {
        this._pageCount = pageCount;
    }

    public get loader(): number | boolean {
        return this._loader;
    }

    public setLoader(value: number | boolean): void {
        this._loader = value;
    }
}
