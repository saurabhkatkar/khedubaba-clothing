import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    const { category } = this.props.match.params;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionPros }) =>
          !category || otherCollectionPros.routeName === category ? (
            <CollectionPreview key={id} {...otherCollectionPros} />
          ) : null
        )}
      </div>
    );
  }
}

export default ShopPage;
