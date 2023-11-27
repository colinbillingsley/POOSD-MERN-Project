import React, { createContext, useReducer, useEffect }  from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    // check whether use wants to login or logout
    switch (action.type) {
        // if login
        case 'LOGIN':
            // return user information from db
            return {user: action.payload}
        // if logout
        case 'LOGOUT':
            // set user to null
            return {user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    // user is null at beginning since no one is logged in
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    // at beginning of loading page check if user is logged in
    // without this, the user would be logged out upon refreshing page
    useEffect(() => {
        // get user item in localstorage
        const user = JSON.parse(localStorage.getItem('user'))

        // if user exists and not null
        if (user) {
            // login user
            dispatch({type: 'LOGIN', payload: user})
        }
    }, [])

    // temp console log
    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}