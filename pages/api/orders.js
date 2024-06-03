
import Order from "@/model/Order"; 
import Authenticated from "@/helpers/Authenticated";
import initDB from "@/helpers/initDB";

initDB()

export default Authenticated(async (req, res) => {
  const orders = await Order.find({ user: req.userId }).populate(
    "products.product"
  );
  const result = orders.map((order)=>{
    return order.products.filter((ord) =>{
      return ord.product !== null;
    })
  })
  console.log(result);
  
  let i = 0;
  orders.map((order)=>{
    order.products = result[i++];
  })
  console.log(orders);
  res.status(200).json(orders);
});
