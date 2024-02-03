import React,{createContext,useState, useEffect} from 'react'
import {fetchDataFromApi} from "../utils/api"

export const Context = createContext();

export const AppContext =  (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [MobileMenu, setMobileMenu] = useState(false);

    useEffect( () => {
        fetchCategoryData(selectCategories)
    },[setSelectCategories])

    const fetchCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setSearchResults(contents)
            setLoading(false)

        })
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            MobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}
export default Context