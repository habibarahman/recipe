import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import Navbar from "./Navbar";
import RecipeInput from './RecipeInput'
import RecipeList from "./RecipeList";
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		recipes: [
  			{
          id: 0,
          title: "Butter Chicken",
          instructions: "Heat 1 tablespoon oil in a large saucepan over medium high heat. Saute shallot and onion until soft and translucent. Stir in butter, lemon juice, ginger-garlic paste, 1 teaspoon garam masala, chili powder, cumin and bay leaf. Cook, stirring, for 1 minute.",
          ingredients: ["onion","ginger","garlic","gram masala","chili powder", "ground cumine","salt","pepper"],
          img: "BC.jpg"
        },
        {
          id: 1,
          title: "Naan Bread",
          instructions: "In a large bowl, dissolve yeast in warm water. Let stand about 10 minutes, until frothy. Stir in sugar, milk, egg, salt, and enough flour to make a soft dough. Knead for 6 to 8 minutes on a lightly floured surface, or until smooth.",
          ingredients: ["Wheat flour (Atta, Maida)","Water", "Yeast", "Cooking fat (Butter or Ghee)", "Yogurt", "Milk"],
          img: "Naan.jpg"
        },
        {
          id: 2,
          title: "Bagara Rice",
          instructions: "Soak the basmati rice for 30 minutes in water.Heat oil in a pan, add bay leaf, cloves, cardamom, cinnamon stick, black cumin seeds, biryani phool, mace and saute it.Add onions, a little salt, green chilies and saute it.Add ginger garlic paste and saute it, cook for one minute until raw flavour is gone.",
          ingredients: ["1 Cup Basmati Rice","2 Cups Onion ","/4 Cup Cashews","2 tsp Shahi Jeera","Cloves","Black Cardamom","Cooking Oil","salt","water"],
          img: "bagara.jpg"
        },
        {
          id: 3,
          title: "Gulab Jamun",
          instructions: "In a large bowl, stir together the milk powder, flour, baking powder, and cardamom. Stir in the almonds, pistachios and golden raisins. ...In a large skillet, stir together the sugar, water, rose water and a pinch of cardamom. ...Fill a large heavy skillet halfway with oil. ...Place the balls into the skillet with the syrup.",
          ingredients: ["3 cups sugar (white)","6 cups water","1 tablespoon cardamom (powder)","2 tablespoons rose water","3 cups powdered milk","1/2 cups flour (all-purpose)","1 1/2 teaspoons baking powder"],
          img: "GulabJamun.jpg"
        }
  	  ],
      nextRecipeId: 4,
      showForm: false
  	}
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  //handlesave represents one recipe
  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes : [...this.state.recipes,newRecipe],
        showForm: false
      };
    });
  }
  
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id); 
    this.setState({recipes});
  }


  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>}
        {showForm ? 
           <RecipeInput 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}
              /> : 
              null }
        <RecipeList onDelete={this.onDelete} recipes = {this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
