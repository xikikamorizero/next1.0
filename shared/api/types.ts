export type ID = {
    id: number;
};

export interface Params {
    language?: string;
}
export interface ParamsAllNews extends Params {
    q?: string;
    from?: string;
    to?: string;
    sortBy?:
        | "relevancy"
        | "popularity"
        | "publishedAt"
        | "relevancy"
        | "popularity"
        | "publishedAt";
    pageSize?: number;
    page?: number;
}
type categories =
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
export interface ParamsTopHeadlines extends Params {
    q?: string;
    country: "";
    category?: categories;
    pageSize?: number;
    page?: number;
}
export interface ParamsSources extends Params {
    country?: string;
    category?: categories;
}

export interface NewsItem {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface NewsResponseList<Type> {
    status: string;
    totalResults: number;
    articles: Type[];
}

interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface NewsSourcesResponse {
    status: string;
    sources: NewsSource[];
}
