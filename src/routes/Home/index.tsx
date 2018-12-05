import React, { Component } from "react"
import { toJS } from "mobx"
import { observer, inject } from "mobx-react"

class Home extends Component<{}> {
  componentDidMount() {
    // Listen and wait for component to mount
    // and for window to be ready before initializing map
    window.addEventListener("load", this.setup())
  }

  setup() {
    // Load JS library with token and create JS instance
    window.mapboxgl.accessToken = process.env.MAPBOX_API_KEY
    const m = new window.mapboxgl.Map({
      container: "map", // id selector
      style: "mapbox://styles/mapbox/streets-v9",
      center: [-122.337255, 47.613095],
      zoom: 9,
      attributionControl: false,
    })
    // Wait a few seconds and change to foobar
    setTimeout(() => {
      this.props.AppStore.MapData.push("bar")
    }, 3000)
  }

  render() {
    const p = { name: "Parcel" }

    return (
      <div>
        <h2>Some data: {toJS(this.props.AppStore.MapData)}</h2>
        <div id="map" className="map" />
      </div>
    )
  }
}

export default inject("AppStore")(observer(Home))
