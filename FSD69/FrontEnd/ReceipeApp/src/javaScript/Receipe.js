export default class Receipe {

    #title;
    #description;
    #ingredients;
    #instructions;

    constructor(props) {

        this.#title = props.title;
        this.#description = props.description;
        this.#ingredients = props.ingredients;
        this.#instructions = props.instructions;
    }

    getTitle() {
        return this.#title;
    }

    getDescription() {
        return this.#description;
    }

    getInstructions(){
        return this.#instructions;
    }

    getIngredients()
    {
        return this.#ingredients;
    }



}