import { IHoteles } from '../../interface'

export async function getHoteles(text: string): Promise<IHoteles[] | undefined> {
    let respose = text ? await fetch(`http://192.168.43.244:3000/filter/${text}`) : await fetch("http://192.168.43.244:3000/");
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