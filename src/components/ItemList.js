import { CDN_URL } from "../utilties/constants";

const ItemList =({items}) =>{
    //console.log(items)
    return <div>
      <div>
        {items.map(item =>
        <div key={item.card.info.id} className="p-2 m-2  border-blue-300 border-b-2 text-left flex">
            <div className="w-8/12">
            <div className="py-2 font-bold">
                <span>{item.card.info.name}</span>
                <span>₹-{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}  </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
            </div>

            <div className="w-4/12">
           <img src={CDN_URL + item.card.info.imageId} className="w-40 p-4"/>
           <button className="p-2 shadow-lg m-auto bg-black text-white rounded-lg absolute mt-10 ">Add+</button>
           </div>
        </div>)}
      </div>
      </div>
}

export default ItemList;