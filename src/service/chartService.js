import data from '../assets/dataBase/data.json';

export const getJsonData = () => {
    try {
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};