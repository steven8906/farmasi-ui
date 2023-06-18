import Hero from "./components/hero";
import ViewPlans from "./components/view-plans";
import NewProducts from "./components/new-products";

export default function Home(){

    return (
        <>
            <Hero/>
            <ViewPlans/>
            <NewProducts path={[]}/>
        </>
    )
}