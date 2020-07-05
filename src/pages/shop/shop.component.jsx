import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.components";

import { firestore,convertCollectionsSnapShotToMap } from '../../firebase/firebase.utills';
 
import { updateCollections } from "../../redux/shop/shop.action";
 
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import   CollectionPage  from "../collection/collection.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPagewWithSpinner = WithSpinner(CollectionPage)

class  ShopPage extends React.Component{
 
    state= {

        loading:true
    };
     unsubscribeFromSnapShot = null;

     componentDidMount(){

        const { updateCollections} = this.props;

        const collectRef= firestore.collection('collections');

         collectRef.get().then(   snapshot => 
            {
           const collectionMap= convertCollectionsSnapShotToMap(snapshot);

           updateCollections(collectionMap);

           this.setState({ loading:false });
        

        })

     }
    

    
        render() {

            const { match } = this.props
            const {loading} = this.state;

            return(
                
                <div className='shop-page'>

            <Route exact path={`${match.path}`} render={(props)=>(
                 <CollectionOverviewWithSpinner isLoading={loading} {...props}/>

            )}


            />
 
             <Route path={`${match.path}/:collectionId`}
             render={(props)=>(
             <CollectionPagewWithSpinner isLoading={loading} {...props}/>

             )}
             />
            
            </div>
            )

            
        }
    
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections:collectionMap =>dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);