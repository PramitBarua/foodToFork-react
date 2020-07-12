import { parsingSingleRecipe } from '../helpers';

export const singleRecipeResponse = {
  vegetarian: false,
  vegan: false,
  glutenFree: true,
  dairyFree: true,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 1,
  gaps: 'no',
  lowFodmap: false,
  preparationMinutes: 5,
  cookingMinutes: 0,
  aggregateLikes: 0,
  spoonacularScore: 24,
  healthScore: 2,
  creditsText: 'Running on Real Food',
  sourceName: 'Running on Real Food',
  pricePerServing: 48.04,
  extendedIngredients: [
    {
      id: 2010,
      aisle: 'Spices and Seasonings',
      image: 'cinnamon.jpg',
      consistency: 'solid',
      name: 'cinnamon',
      original: '1 tsp cinnamon',
      originalString: '1 tsp cinnamon',
      originalName: 'cinnamon',
      amount: 1,
      unit: 'tsp',
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 1,
          unitShort: 'tsp',
          unitLong: 'teaspoon',
        },
        metric: {
          amount: 1,
          unitShort: 'tsp',
          unitLong: 'teaspoon',
        },
      },
    },
    {
      id: 93602,
      aisle: 'Health Foods',
      image: 'shelled-hemp-seeds.png',
      consistency: 'solid',
      name: 'hemp seeds',
      original: '¼ cup (40 g) hemp seeds',
      originalString: '¼ cup (40 g) hemp seeds',
      originalName: '¼ cup hemp seeds',
      amount: 40,
      unit: 'g',
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 1.411,
          unitShort: 'oz',
          unitLong: 'ounces',
        },
        metric: {
          amount: 40,
          unitShort: 'g',
          unitLong: 'grams',
        },
      },
    },
    {
      id: 9421,
      aisle: 'Dried Fruits;Produce',
      image: 'dates.jpg',
      consistency: 'solid',
      name: 'medjool dates',
      original: '1 cup (225 g) packed pitted medjool dates',
      originalString: '1 cup (225 g) packed pitted medjool dates',
      originalName: 'cup packed pitted medjool dates',
      amount: 225,
      unit: 'g',
      meta: ['packed', 'pitted'],
      metaInformation: ['packed', 'pitted'],
      measures: {
        us: {
          amount: 7.937,
          unitShort: 'oz',
          unitLong: 'ounces',
        },
        metric: {
          amount: 225,
          unitShort: 'g',
          unitLong: 'grams',
        },
      },
    },
    {
      id: 8120,
      aisle: 'Cereal',
      image: 'rolled-oats.jpg',
      consistency: 'solid',
      name: 'oats',
      original: '½ cup (50 g) quick oats',
      originalString: '½ cup (50 g) quick oats',
      originalName: '½ cup quick oats',
      amount: 50,
      unit: 'g',
      meta: ['quick'],
      metaInformation: ['quick'],
      measures: {
        us: {
          amount: 1.764,
          unitShort: 'oz',
          unitLong: 'ounces',
        },
        metric: {
          amount: 50,
          unitShort: 'g',
          unitLong: 'grams',
        },
      },
    },
    {
      id: 10012108,
      aisle: 'Baking',
      image: 'shredded-coconut.jpg',
      consistency: 'solid',
      name: 'unsweetened shredded coconut',
      original: '¼ cup (25 g) unsweetened shredded coconut',
      originalString: '¼ cup (25 g) unsweetened shredded coconut',
      originalName: '¼ cup unsweetened shredded coconut',
      amount: 25,
      unit: 'g',
      meta: ['shredded', 'unsweetened'],
      metaInformation: ['shredded', 'unsweetened'],
      measures: {
        us: {
          amount: 0.882,
          unitShort: 'oz',
          unitLong: 'ounces',
        },
        metric: {
          amount: 25,
          unitShort: 'g',
          unitLong: 'grams',
        },
      },
    },
    {
      id: 99076,
      aisle: 'Health Foods',
      image: 'protein-powder-vanilla.png',
      consistency: 'solid',
      name: 'vanilla protein powder',
      original: '¼ cup (28 g) Vega Performance Protein Vanilla',
      originalString: '¼ cup (28 g) Vega Performance Protein Vanilla',
      originalName: '¼ cup Vega Performance Protein Vanilla',
      amount: 28,
      unit: 'g',
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 0.988,
          unitShort: 'oz',
          unitLong: 'ounce',
        },
        metric: {
          amount: 28,
          unitShort: 'g',
          unitLong: 'grams',
        },
      },
    },
  ],
  id: 869354,
  title: 'No-Bake Coconut Protein Bites',
  readyInMinutes: 5,
  servings: 14,
  sourceUrl: 'http://runningonrealfood.com/no-bake-coconut-protein-bites/',
  image: 'https://spoonacular.com/recipeImages/869354-556x370.jpg',
  imageType: 'jpg',
  summary:
    'You can never have too many side dish recipes, so give No-Bake Coconut Protein Bites a try. For <b>48 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. This recipe makes 14 servings with <b>95 calories</b>, <b>3g of protein</b>, and <b>3g of fat</b> each. 1 person has made this recipe and would make it again. Head to the store and pick up vega performance protein vanilla, coconut, medjool dates, and a few other things to make it today. From preparation to the plate, this recipe takes around <b>5 minutes</b>. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 28%</b>. This score is not so amazing. Try <a href="https://spoonacular.com/recipes/no-bake-protein-bites-560719">No Bake Protein Bites</a>, <a href="https://spoonacular.com/recipes/pumpkin-pie-protein-no-bake-bites-678370">Pumpkin Pie Protein No-Bake Bites</a>, and <a href="https://spoonacular.com/recipes/no-bake-honey-butter-protein-bites-627112">No-Bake Honey Butter Protein Bites</a> for similar recipes.',
  cuisines: [],
  dishTypes: ['side dish'],
  diets: ['gluten free', 'dairy free'],
  occasions: [],
  winePairing: {},
  instructions:
    'Place all ingredients in a food processor or high-powered blender.Mix until it forms a dough.Roll into balls.Store in the fridge or freezer.',
  analyzedInstructions: [
    {
      name: '',
      steps: [
        {
          number: 1,
          step:
            'Place all ingredients in a food processor or high-powered blender.',
          ingredients: [],
          equipment: [
            {
              id: 404771,
              name: 'food processor',
              localizedName: 'food processor',
              image: 'food-processor.png',
            },
            {
              id: 404726,
              name: 'blender',
              localizedName: 'blender',
              image: 'blender.png',
            },
          ],
        },
        {
          number: 2,
          step: 'Mix until it forms a dough.',
          ingredients: [],
          equipment: [],
        },
        {
          number: 3,
          step: 'Roll into balls.Store in the fridge or freezer.',
          ingredients: [],
          equipment: [],
        },
      ],
    },
  ],
  originalId: null,
};

export const singleRecipe = parsingSingleRecipe(singleRecipeResponse);