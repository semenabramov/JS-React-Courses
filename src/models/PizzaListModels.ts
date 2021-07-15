export interface PizzaProps {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;
}

export interface PizzaListProps{
    readonly pizzaList: PizzaProps[];
}