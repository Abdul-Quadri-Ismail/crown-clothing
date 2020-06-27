import React from 'react';

import {connect } from 'react-redux';

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview  from "../preview-collection/preview-collection.component";
import { createStructuredSelector } from "reselect";
import './collection-overview.style.scss';


const CollectionOverview= ({ collections }) =>(
    <div className='collections-overview'>
    {
        collections.map(({id,...otherCoolectin}) => (
            <CollectionPreview key={id}{...otherCoolectin}/>
        ))
    }
    </div>
);

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default  connect(mapStateToProps)(CollectionOverview)