import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux//shop/shop.selectors';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) =>{ 
  console.log('here is the collection', collection)
  return(
    <div className='collection-page'>
      <h2>COLLECTION PAGE</h2>
    </div>
  )
}

//ownProps is the props of the component that is wrapped in the connect HOC
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state) //selector needs a part of the state depending on the URL parameter
})
export default connect(mapStateToProps)(CollectionPage);