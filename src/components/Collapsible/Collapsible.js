import React from 'react';
import { CollapsibleWrapper } from './Collapsible.styles'
import { items } from '../../data'
import Item from './Item';




export const Collapsible = () => {
    return (
        <CollapsibleWrapper>

{
    items.map((item, index) => <Item key={index} itemTitle={item.title} itemContent={item.content} />)
}
        </CollapsibleWrapper>
    )
}


export default Collapsible;