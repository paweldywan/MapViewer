import {
    useState
} from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Map from './components/Map';

import OsmLayer from "./components/OsmLayer";

import WmsLayer from "./components/WmsLayer";

import {
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";

function App() {
    const [url, setUrl] = useState('https://ahocevar.com/geoserver/wms');

    const [layers, setLayers] = useState('topp:states');

    const [showMap, setShowMap] = useState(true);

    const [showOsm, setShowOsm] = useState(true);

    const [showWms, setShowWms] = useState(false);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="url">Url</Label>

                            <Input
                                id="url"
                                value={url}
                                onChange={e => setUrl(e.target.value)}
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                        <FormGroup>
                            <Label htmlFor="layers">Layers</Label>

                            <Input
                                id="layers"
                                value={layers}
                                onChange={e => setLayers(e.target.value)}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs="auto">
                        <FormGroup check>
                            <Label htmlFor="showMap" check>Show map</Label>

                            <Input
                                id="showMap"
                                type="checkbox"
                                checked={showMap}
                                onChange={e => setShowMap(e.target.checked)}
                            />
                        </FormGroup>
                    </Col>


                    <Col xs="auto">
                        <FormGroup check>
                            <Label htmlFor="showOsm" check>Show osm</Label>

                            <Input
                                id="showOsm"
                                type="checkbox"
                                checked={showOsm}
                                onChange={e => setShowOsm(e.target.checked)}
                            />
                        </FormGroup>
                    </Col>

                    <Col xs="auto">
                        <FormGroup check>
                            <Label htmlFor="showWms" check>Show wms</Label>

                            <Input
                                id="showWms"
                                type="checkbox"
                                checked={showWms}
                                onChange={e => setShowWms(e.target.checked)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>

            {
                showMap &&
                <Map>
                    {showOsm && <OsmLayer />}

                    {showWms &&
                        <WmsLayer
                            url={url}
                            layers={layers}
                            zIndex={2}
                        />}
                </Map>
            }
        </>
    );
}

export default App;