import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { connect } from 'react-redux';
import {
  HeaderComponent,
  ListComponent,
  RecipeComponent,
  LoadingComponent,
  ErrorComponent,
  Footer,
} from './Component/index';
import { getSingleRecipeAction } from './Redux/Action';
import { singleRecipeUrl } from './helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smallScreen: true,
      showRecipeOnly: false,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleSingleRecipeClick = this.handleSingleRecipeClick.bind(this);
    this.showListComponent = this.showListComponent.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps) {
    const prevAllRecipeId = prevProps.allRecipes.map((item) => item.id);
    const thisPropAllRecipeId = this.props.allRecipes.map((item) => item.id);

    if (
      !this.arraysEqual(prevAllRecipeId, thisPropAllRecipeId) &&
      this.state.showRecipeOnly
    ) {
      this.setState({ showRecipeOnly: false });
    }
  }

  /**
   *
   */
  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    const aSort = [...a].sort();
    const bSort = [...b].sort();

    for (var i = 0; i < aSort.length; ++i) {
      if (aSort[i] !== bSort[i]) return false;
    }
    return true;
  }

  /**
   *
   */
  updateWindowDimensions() {
    if (window.innerWidth <= 600 && !this.state.smallScreen) {
      this.setState({ smallScreen: true });
    } else if (window.innerWidth > 600 && this.state.smallScreen) {
      this.setState({ smallScreen: false });
    }
  }

  /**
   *
   */
  handleSingleRecipeClick(id) {
    this.props.getSingleRecipe(singleRecipeUrl(id));
    if (window.innerWidth <= 600) {
      this.setState({ showRecipeOnly: true });
    }
  }

  /**
   *
   */
  showListComponent() {
    if (window.innerWidth <= 600) {
      this.setState({ showRecipeOnly: false });
    }
  }

  render() {
    const {
      init,
      allRecipes,
      loadingAllRecipes,
      errorAllRecipes,
      singleRecipe,
      loadingSingleRecipe,
      errorSingleRecipe,
    } = this.props;

    let listContent = null;
    let recipeContent = null;
    let infoText = (
      <h2 className={styles.infoText}>
        Search over 1,000,000 recipes in natural language. <br />
        Search, Explore, Cook and Repeat
      </h2>
    );

    // list content
    if (loadingAllRecipes) {
      listContent = <LoadingComponent data-testid="list-loading-component" />;
    } else if (errorAllRecipes !== '') {
      listContent = (
        <ErrorComponent
          data-testid="list-error-component"
          code={errorAllRecipes.code}
        />
      );
    } else if (!init && allRecipes && allRecipes.length === 0) {
      listContent = (
        <ErrorComponent
          data-testid="list-error-component"
          code={'no result found'}
        />
      );
    } else if (allRecipes && allRecipes.length > 0) {
      listContent = (
        <ListComponent
          smallScreen={this.state.smallScreen}
          showRecipeOnly={this.state.showRecipeOnly}
          data-testid="list-component"
          recipes={allRecipes}
          onClick={this.handleSingleRecipeClick}
        />
      );
    }

    // recipe content
    if (loadingSingleRecipe) {
      recipeContent = (
        <LoadingComponent data-testid="recipe-loading-component" />
      );
    } else if (errorSingleRecipe !== '') {
      recipeContent = (
        <ErrorComponent
          data-testid="recipe-error-component"
          code={errorSingleRecipe.code}
        />
      );
    } else if (
      Object.keys(singleRecipe).length > 1 &&
      singleRecipe.constructor === Object
    ) {
      recipeContent = (
        <RecipeComponent
          smallScreen={this.state.smallScreen}
          showRecipeOnly={this.state.showRecipeOnly}
          data-testid="recipe-component"
          recipeData={singleRecipe}
          showListComponent={this.showListComponent}
        />
      );
    }

    return (
      <Router basename={'/project/foodie'}>
        <Route path="/">
          <div className={styles.backgroundImg}>
            <div className={styles.app}>
              <HeaderComponent data-testid="header-component" />
              <div className={styles.container}>
                {listContent || recipeContent ? (
                  <>
                    {listContent}
                    {recipeContent}
                  </>
                ) : (
                  infoText
                )}
              </div>
            </div>
            <Footer />
          </div>
        </Route>
      </Router>
    );
  }
}

const mapStateToProps = ({ init, recipes, recipe }) => {
  return {
    init: init,
    allRecipes: recipes.data,
    loadingAllRecipes: recipes.loading,
    errorAllRecipes: recipes.error,
    singleRecipe: recipe.data,
    loadingSingleRecipe: recipe.loading,
    errorSingleRecipe: recipe.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleRecipe: (endPoint) => {
      return dispatch(getSingleRecipeAction(endPoint));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
