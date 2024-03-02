export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://www.ecepl.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-14-at-11.30.03-AM-2-1.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           Waste Food Management System 
                        </h2>
                        <p className="mt-6 text-gray-600">
                        We are working to deliver the leftover food to the people in need, this will reduce food waste and people in need will also get food. I dont know how many crores of people sleep hungry at night. With the help of our project, they will also get food. There will be no food waste, lakhs of lives will be saved through our project and an awareness will also be created among the people with the help of our project.
                        </p>
                        {/* <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}