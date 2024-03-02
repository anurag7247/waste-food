export default function Home() {
    return (
        <div className="mx-auto w-full max-w-full bg">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        Stop wasting food and 
                            <span className="hidden sm:block text-4xl">start saving the planet</span>
                        </h2>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className=" w-72" src="https://i.pinimg.com/originals/bd/42/24/bd4224bdc0d7361c33324daba0c59b53.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://cdni.iconscout.com/illustration/premium/thumb/reducing-food-waste-7981773-6390464.png?f=webp" alt="image2" />
            </div>

            <h3 className="text-center py-8 font-semibold">As we know, our world is battling high food wastage, widespread hunger and extensive food insecurity. These are all problems that directly affect the basic quality of life. Moreover, higher food wastage also means that we would need to build more waste disposal facilities, which leads to an unnecessary increase energy consumption. However, by distributing these food leftovers to people who are unable to afford food on their own, we can alleviate their standard of living. So the value of this product is the possibility of solving all the mentioned problems, without even increasing the food output.</h3>
        </div>
    );
}