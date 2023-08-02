import { action, makeAutoObservable } from "mobx";
import * as types from "../../../shared/api/types";

export class Store {
    private _news: types.NewsItem[] = [];
    private _page: number = 1;
    private _language: string = "ru";

    constructor() {
        makeAutoObservable(this);
        this.setList = this.setList.bind(this);
        this.setPage = this.setPage.bind(this);
    }

    public get list(): types.NewsItem[] {
        return this._news;
    }

    public setList(value: types.NewsItem[]): void {
        this._news = value;
    }

    public get page(): number {
        return this._page;
    }

    public setPage(value: number): void {
        this._page = value;
    }

    public get language(): string {
        return this._language;
    }
}
