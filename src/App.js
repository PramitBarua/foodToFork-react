import React from 'react';
import styles from './App.module.scss';
import {
  HeaderComponent,
  BackgroundVideoComponent,
  ListComponent,
} from './Component/index';
import { connect } from 'react-redux';

// import { useEffect } from 'react';

// import store from './Redux/Store';

function App({ allRecipes }) {
  // console.log('app component', store.getState());
  return (
    <>
      <BackgroundVideoComponent data-testid="background-component" />
      <div className={styles.app}>
        <HeaderComponent data-testid="header-component" />
        {allRecipes && allRecipes.length > 0 ? (
          <ListComponent
            data-testid="list-component"
            recipes={allRecipes}
            onClick={null}
          />
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = ({ recipes }) => {
  return {
    allRecipes: recipes.data,
    loadingAllRecipes: recipes.loading,
    errorAllRecipes: recipes.error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllRecipe: (endPoint) => {
//       return dispatch(getAllRecipe(endPoint));
//     },
//   };
// };

// export default connect(mapToStateProps, mapToDispatchProps)(App);
export default connect(mapStateToProps)(App);
