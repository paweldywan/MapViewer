import Layer from "./Layer";

import Tile from "ol/layer/Tile";

import TileWMS from "ol/source/TileWMS";

interface Props {
    url: string;
    layers: string;
    zIndex: number;
}

const WmsLayer = ({
    url,
    layers,
    zIndex
}: Props) => {
    return (
        <Layer getLayer={() => new Tile({
            source: new TileWMS({
                url: url,
                params: { 'LAYERS': layers, 'TILED': true },
            }),
            zIndex
        })} />
    );
};

export default WmsLayer;