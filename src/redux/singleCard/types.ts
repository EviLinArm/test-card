export type PriceItem = {
    retail_price: number;
};

export type CharsItem = {
    id: number;
    title: string;
    type: string;
    value: any;
    meta: any;
};

export type MediaItem = {
    id: number;
    name: string;
    format: 'jpg' | 'jpeg' | 'png' | 'mp4' | string;
    path: string;
};

export type CategoryItem = {
    id: number;
    name: string;
};

export type TagItem = {
    id: number;
    name: string;
};

export interface SingleCardData {
    id: number;
    name: string;
    price: PriceItem;
    characteristics: CharsItem[];
    description: string;
    media: MediaItem[];
    categories: CategoryItem[];
    tags: TagItem[];
}