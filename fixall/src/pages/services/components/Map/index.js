import React , {Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Wrapper = styled.div` 
height:{props=>props.height};
`;
export default class Map extends Component {
	
	 onMapClick=(e)=> {
	    alert("You clicked the map at " + e.latlng);
	    this.setState({
	    	latlng:e.latlng
	    });
	}

	 constructor(props)
		{
			super(props);
			this.state = {
					latlng:[24.9290468, 67.1041035],
					markpos:[24.9290468, 67.1041035],
					map:{}
			}
		}
	//mymap.on('click', onMapClick);
	componentDidMount()
	{
		this.state.map = L.map('mapid').setView(this.state.latlng, 15);
		
		L.tileLayer('http://localhost:8081/styles/osm-bright/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.state.map);

		L.marker(this.state.latlng).addTo(this.state.map)
		    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
		    .openPopup();
		
		this.state.map.on('click',this.onMapClick);
	}
	
	render(){
		L.marker(this.state.latlng).addTo(this.state.map)
	    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
	    .openPopup();
		return <Wrapper  height="720px" id="mapid"/>
	}
}