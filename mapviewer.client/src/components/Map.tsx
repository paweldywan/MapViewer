import {
    ReactNode,
    useEffect,
    useState
} from 'react';

import {
    Map as OlMap,
    View
} from 'ol';

import MapContext from '../MapContext';

import "ol/ol.css";

interface Props {
    children?: ReactNode;
};

const Map = ({ children }: Props) => {
    const [map, setMap] = useState<OlMap | null>(null);

    useEffect(() => {
        const mapToSet = new OlMap({
            view: new View({
                center: [0, 0],
                zoom: 1,
            }),
            target: "map"
        });

        setMap(mapToSet);

        return () => mapToSet.dispose();
    }, []);

    return (
        <div id="map">
            <MapContext.Provider value={map}>
                {children}
            </MapContext.Provider>
        </div>
    );
};

export default Map;