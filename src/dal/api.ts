import {instance} from "./settings/settings";
import {Url} from "./settings/URL";
import {RootType} from "./types";

export const api = {
    products() {
        return instance.get<RootType>(Url.PRODUCTS)
    }
}