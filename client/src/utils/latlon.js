import API from "../utils/API";
import axios from "axios";




// export let mapLatLonData = [];

export function mapLogic(cb) {
  let mapLogic = [];

  let mapLogicData = [];

  // let mapAxiosData= [];

  let latitudeData = [];
  let longitudeData = [];
  let sumLat = 0
  let sumLon = 0


  console.log("Hello")
  API.getGroupId()
    .then(res => {
      mapLogic = res.data
      console.log(mapLogic)
      // this.setState({mapRawData: res.data})
      // console.log(this.state.mapRawData);
      mapLogicData = mapLogic.map(x => ({
        "address": x.address,
        "city": x.city,
        "state": x.state
      }));
      console.log(mapLogicData)

      for (let i = 0; i < mapLogicData.length; i++) {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${mapLogicData[i].address} ${mapLogicData[i].city} ${mapLogicData[i].state} United States.json?limit=1&access_token=pk.eyJ1Ijoia3V0dGE5NiIsImEiOiJjazJoMzRmbmQxMWd2M2V0ODNheGI3OGppIn0.VbZuagXbuH8he6i7Oky_fQ`).then(res => {
          const result = res.data.features[0].geometry
          console.log(result)

          latitudeData.push(result.coordinates[1])
          longitudeData.push(result.coordinates[0])

          console.log(latitudeData);
          console.log(longitudeData)
          if (i == mapLogicData.length - 1) {
            cb(findMidpoint());
          }
        })
      }
    })
    .catch(err => console.log(err));

  function findMidpoint() {
    console.log(latitudeData)


    for (let i = 0; i < latitudeData.length; i++) {
      sumLat += latitudeData[i]
    }
    console.log(sumLat)

    for (let i = 0; i < longitudeData.length; i++) {
      sumLon += longitudeData[i]
    }
    console.log(sumLon)

    let midLat = sumLat / latitudeData.length
    let midLon = sumLon / longitudeData.length

    console.log(midLat, midLon)

    return {
      midLat: midLat,
      midLon: midLon
    }
  }


}
