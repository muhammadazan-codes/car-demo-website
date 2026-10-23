// interface Car {
//   name: string
//   price: string
//   image: string
//   type: string
// }

// interface CarCardProps {
//   car: Car
// }

// export function CarCard({ car }: CarCardProps) {
//   return (
//     <div className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300">
//       <div className="aspect-video overflow-hidden">
//         <img
//           src={car.image}
//           alt={car.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>
//       <div className="p-5">
//         <span className="text-xs font-medium text-primary uppercase tracking-wide">
//           {car.type}
//         </span>
//         <h3 className="mt-2 text-lg font-bold text-foreground">{car.name}</h3>
//         <div className="mt-3 flex items-center justify-between">
//           <span className="text-xl font-bold text-primary">{car.price}</span>
//           <button className="px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors">
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }