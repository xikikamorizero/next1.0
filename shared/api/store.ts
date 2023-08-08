import { makeAutoObservable, action } from "mobx";
import { News as NewsService } from "./services";

class News {
    constructor() {
        makeAutoObservable(this);
    }
    public readonly getAllNews = NewsService.AllNews;
    public readonly getTopHeadlines = NewsService.TopHeadlines;
    public readonly getSources = NewsService.Sources;
}

export class Store {
    public readonly news = new News();
    private _lang = "ru";

    constructor() {
        makeAutoObservable(this);
        this.setLang = this.setLang.bind(this);
    }

    public get lang(): string {
        return this._lang;
    }
    public setLang(value: string): void {
        this._lang = value;
    }
}
