import { IHoteles } from '../../interface'
import { config } from '../../config'

export async function getHoteles(text: string): Promise<IHoteles[] | undefined> {
    let respose = text ? await fetch(`${config.hostUrl}/filter/${text}`) : await fetch(`${config.hostUrl}/`);
    let data: Array<IHoteles> = []
    switch (respose.status) {
        case 200: {
            data = await respose.json();
            return data;
        }
        case 204: {
            return data;
        }
        default: {
            throw new Error(`Request Fail ${respose.status}`)
        }
    }

}