import { IHoteles } from '../interface'
export interface _StoreBody {
    body: JSX.Element | null;
    name: string
}

export interface _StoreListHoteles {
    list: Array<IHoteles>
}