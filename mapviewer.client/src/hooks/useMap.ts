import {
    useContext
} from "react";

import MapContext from "../MapContext";

const useMap = () => useContext(MapContext);

export default useMap;