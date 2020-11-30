import React, { useState, useRef } from 'react';
import {  Title, Panel, ItemWrapper } from './Collapsible.styles'
const Item = (props) => {

    const [state, setState] = useState(false);
const panelBody = useRef(null);

    const currentHeight = state ? panelBody.current.clientHeight : 0;

    return (
        <ItemWrapper className={state ? 'isExpanded' : null}>
<Title onClick={() => setState(!state)}>{props.itemTitle}</Title>
<Panel style={{ height: `${currentHeight}px` }}>
<div ref={panelBody}>{props.itemContent}</div>
</Panel>
        </ItemWrapper>
    )
}

export default Item;