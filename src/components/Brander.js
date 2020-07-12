import React from 'react'

export default function Brander({children, brand}) {
    return (
        <header className={Brander}>{children}</header>
    )
}
