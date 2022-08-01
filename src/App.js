import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import logo from './logo.svg';
import './App.css';
import {ChildNode} from "./ChildNode";

let object1 = [
    {
        "id": 1,
        "category": "vehicles",
        "parent": null,
    },
    {
        "id": 4,
        "category": "cars and Trucks",
        "parent": 1,
    },
    {
        "id": 3,
        "category": "Boats",
        "parent": null,
    },
    {
        "id": 12,
        "category": "ss Minow",
        "parent": 6,
    },
    {
        "id": 5,
        "category": "cars",
        "parent": null,
    },
    {
        "id": 6,
        "category": "small yatchs",
        "parent": 14,
    },
    {
        "id": 7,
        "category": "big yatchs",
        "parent": 14,
    },
    {
        "id": 9,
        "category": "Odessy Base",
        "parent": 13,
    },
    {
        "id": 8,
        "category": "Odessy Xl",
        "parent": 13,
    },
    {
        "id": 10,
        "category": "slow cars",
        "parent": 4,
    },
    {
        "id": 11,
        "category": "fast cars",
        "parent": 4,
    },
    {
        "id": 2,
        "category": "Mustang",
        "parent": 11,
    },
    {
        "id": 13,
        "category": "Odessy",
        "parent": 10,
    },
    {
        "id": 14,
        "category": "Yatchs",
        "parent": 3,
    },

];

//recursive mapping
const recursiveTreeMap = parentId => {
    const parents = object1.filter(item => item.parent === parentId);
    parents.map((p, i) => parents[i].items = recursiveTreeMap(p.id));
    return parents;
}
recursiveTreeMap(null);

const root = object1.filter(item => item.parent === null);
console.log(root)
function App() {
    return (
        <TreeView
            aria-label="file system navigator"
            sx={{overflow: 'hidden'}}
        >
            {(root || []).map((item, ix) => <ChildNode {...item} key={ix}/>)}

        </TreeView>
    );
}

export default App;
