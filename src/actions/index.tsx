import * as constants from '../contants';
import { IHoteles } from '../interface'

export interface _ChangeBody {
    type: constants.CHANGE_BODY,
    value: {
        componet: JSX.Element
        name: string
    }
}

export function changeBody(value: JSX.Element, name: string): _ChangeBody {
    return {
        type: constants.CHANGE_BODY,
        value: {
            componet: value,
            name: name
        }
    }
}

export interface ILoadList {
    type: constants.LOAD_LIST_HOTELES
    value: Array<IHoteles>
}

export function loadList(list: Array<IHoteles>): ILoadList {
    return {
        type: constants.LOAD_LIST_HOTELES,
        value: list
    }
}