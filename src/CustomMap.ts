export interface InstanceOnMap {
    location: {
        lat:number,
        lng: number
    };

    markerContent(): string;
    color?: string;

}


export class CustomMap {
    private googleMap: google.maps.Map;


    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId),
            {
                zoom: 1,
                center : {lat: 0, lng: 0}
            }
        );
    }


    addMarker(instanceOnMap: InstanceOnMap): void {
       const marker =  new google.maps.Marker(
            {
                map: this.googleMap,
                position: {
                    lat: instanceOnMap.location.lat,
                    lng: instanceOnMap.location.lng
                }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: instanceOnMap.markerContent()
            });
            infoWindow.open(this.googleMap, marker)
        })
    }



}