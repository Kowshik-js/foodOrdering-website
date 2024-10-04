const RestaurantCategory=()=>{
    return <div>
        <div className="w-6/12 m-auto my-auto bg-gray-50 shadow-lg p-4 flex justify-between">

            <span className="font-bold text-lg">{Data.title}</span>
            <span>{Data.title}</span>
            <spam>....</spam>
            <ItenList items={data.itemcards }/>
        </div>

    </div>
}

export default RestaurantCategory;