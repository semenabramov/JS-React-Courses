export interface PizzaProps {
    readonly id: string;
    readonly title: string;
    readonly price: string;
    readonly description: string;
    readonly img: string;
    readonly  clickHandler?: (title: string, count: number)=>void
}

export interface PizzaListProps{
    readonly pizzaList: PizzaProps[];
    readonly clickHandler?: (title: string, count: number)=>void
}