import React from 'react'
import { ArrowBackIconButton, Header } from '../../common/components/header'


export const Menu = () => {
    return (
        <div>
            <div>
                <Header title="Menu" children={<ArrowBackIconButton />} />
            </div>
            <h1>Menu Content</h1>
        </div>
    )
}