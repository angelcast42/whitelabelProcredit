import { Injectable } from '@angular/core'
import { Sim } from '@ionic-native/sim'

@Injectable()
export class SimProvider {
  constructor(
    private sim: Sim
  ) {

  }
  loadSim(): Promise<any>{ //resolve: true or false
    return new Promise( (resolve, reject) => {
      this.isAuth().then(isauth => {
        if (isauth === true) {
          this.getSim().then(
            (response) => resolve(response),
            (err) => reject(err)
          )
        } else {
          this.requestAuth().then(requested => {
            if (requested == 'OK'){
              this.getSim().then(
                (response) => resolve(response),
                (err) => reject(err)
              )  
            }
          })          
        }
      })
    })
  }
  getSim(): Promise<any>{ //resolve: carrierName, countryCode, phoneNumber, deviceId, simSerialNumber, subscriberId
    return new Promise( (resolve, reject) => {
      this.sim.getSimInfo().then(
        (info) => resolve(info),
        (err) => reject(err)
      )
    })
  }
  isAuth(): Promise<any>{ //resolve: true or false
    return new Promise( (resolve, reject) => {
      this.sim.hasReadPermission().then(
        (info) => resolve(info),
        (err) => reject(err)
      )
    })
  }
  requestAuth(): Promise<any>{ // resolve: OK
    return new Promise( (resolve, reject) => {
      this.sim.requestReadPermission().then(
        (info) => resolve(info),
        (err) => reject(err)
      )
    })
  }
}
