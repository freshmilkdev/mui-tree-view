import React from 'react';

import TreeItem from "@mui/lab/TreeItem";

export const ChildNode = ({id, category, items}) => {

    return (
        <TreeItem nodeId={id.toString()} label={category}>
            {items && items.map((item, ix) =>
                <ChildNode  {...item} key={`${item.id}`}/>)}
        </TreeItem>
    );
}
