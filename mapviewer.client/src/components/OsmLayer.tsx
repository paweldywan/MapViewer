import Layer from "./Layer";

import Tile from "ol/layer/Tile";

import OSM from "ol/source/OSM";

const OsmLayer = () => {
    return (
        <Layer
            getLayer={() => new Tile({
                source: new OSM(),
            })}
        />
    );
};

export default OsmLayer;