// import React, { useContext } from 'react';
// import{CartContext} from'../CartPage/CartPage'

// const CartPage = () => {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className='container mx-auto p-4'>
//       <h1 className='text-2xl font-bold mb-4'>আপনার কার্ট</h1>
//       {cart.length === 0 ? (
//         <p>আপনার কার্টে কোন পণ্য নেই।</p>
//       ) : (
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//           {cart.map(product => (
//             <div key={product.product_id} className="card bg-base-100 shadow-xl">
//               <figure>
//                 <img src={product.product_image} alt={product.product_title} className="w-full h-48 object-cover" />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">{product.product_title}</h2>
//                 <p>মূল্য: ${product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;