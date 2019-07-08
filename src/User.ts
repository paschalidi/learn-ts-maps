import * as faker from 'faker';
import { InstanceOnMap } from './CustomMap'

export class User implements InstanceOnMap{
    name: string;
    location : {
        lat: number,
        lng: number
    };

    constructor(){
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }


    }

    markerContent = () => `Crazy user is called ${this.name}`
}