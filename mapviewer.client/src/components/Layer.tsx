import {
    useEffect
} from "react";

import BaseLayer from "ol/layer/Base";

import useMap from "../hooks/useMap";

interface Props {
    getLayer: () => BaseLayer;
}

const Layer = ({
    getLayer
}: Props) => {
    const map = useMap();

    useEffect(() => {
        if (!map) {
            return;
        }

        const layer = getLayer();

        map.addLayer(layer);

        return () => {
            map.removeLayer(layer);
        };
    }, [getLayer, map]);

    return null;
};

export default Layer;