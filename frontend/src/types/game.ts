export type game = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type gamePage = {
    content: game[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}