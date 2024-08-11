import React, { createContext, useContext, useState, useEffect } from 'react';

import ActeService from '../services/serviceActe';
import TravailService from '../services/serviceTravail';
import FonkotanyService from '../services/serviceFonkotany';
import CommuneService from '../services/serviceCommune';
import DistrictService from '../services/serviceDistrict';
import RegionService from '../services/serviceRegion';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // const [actes, setActes] = useState([]);
    const [typesActe, setTypesActes] = useState([]);
    const [travails, setTravails] = useState([]);
    const [fonkotany, setFonkotany] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        // ActeService.getActe().then(data => setActes(data));
        ActeService.getTypes().then(data => setTypesActes(data));
        TravailService.getTravail().then(setTravails);
        FonkotanyService.getFonkotany().then(setFonkotany);
        CommuneService.getCommune().then(setCommunes);
        DistrictService.getDistrict().then(setDistricts);
        RegionService.getRegion().then(setRegions);
    }, []);

    return (
        <DataContext.Provider value={{typesActe, travails, fonkotany, communes, districts, regions }}>
            {children}
        </DataContext.Provider>
    );
};



export const useDataContext = () => {
    return useContext(DataContext);
};
