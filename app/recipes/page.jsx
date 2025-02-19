import Counter from "@/components/Counter"

export default async function Recipes() {

    const resp = await fetch('https://dummyjson.com/recipes')
    const { recipes } = await resp.json()

    return (
        <div className="grid grid-cols-4 gap-5">

            {
                recipes.map((item) => (
                    <div key={item.id}>
                        <img className="w-full" src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.difficulty}</p>

                        <Counter />
                    </div>
                ))
            }

        </div>
    )
}
