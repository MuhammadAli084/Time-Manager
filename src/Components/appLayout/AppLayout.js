import React from 'react'
import Header from '../header/Header'
const AppLayout = ({children}) => {
    return (
        <div className="Dashboard">
            <Header />
            {children}
        </div>
    )
}

export default AppLayout
