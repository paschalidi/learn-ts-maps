import * as faker from 'faker';
import { InstanceOnMap } from './CustomMap'

export class Company implements InstanceOnMap{
    name: string;
    catchPhrase: string;
    location : {
        lat: number,
        lng: number
    };

    constructor(){
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }

    markerContent = () => ` 
     <div>
         <h1>
            Company is called ${this.name}. 
         </h1>
        Catch phrase ${this.catchPhrase}
    </div>
    `



}