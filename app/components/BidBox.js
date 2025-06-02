// "use client";
// import { useEffect, useState } from "react";
// import socket from "@/libs/socket";

// export default function BidBox({ productId, userId }) {
//   const [bid, setBid] = useState("");
//   const [highestBid, setHighestBid] = useState(null);
//   const [isActive, setIsActive] = useState(true);
//   const [winner, setWinner] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     socket.on("new-bid", ({ productId: pid, amount }) => {
//       if (pid === productId) {
//         setHighestBid(amount);
//         setError("");
//       }
//     });

//     socket.on("bid-rejected", (data) => setError(data.reason));

//     socket.on("bidding-stopped", ({ productId: pid, winner: w }) => {
//       if (pid === productId) {
//         setIsActive(false);
//         if (w === userId) setWinner(true);
//       }
//     });

//     return () => socket.off();
//   }, []);

//   const handleBid = () => {
//     socket.emit("bid", { productId, amount: parseFloat(bid), userId });
//     setBid("");
//   };

//   return (
//     <div className="border p-4 rounded">
//       <h2>Current Highest: ${highestBid ?? "No bids yet"}</h2>
//       {isActive ? (
//         <>
//           <input
//             type="number"
//             value={bid}
//             onChange={(e) => setBid(e.target.value)}
//             placeholder="Your bid"
//             className="border p-2 mr-2"
//           />
//           <button onClick={handleBid} className="bg-blue-500 text-white p-2">
//             Bid
//           </button>
//         </>
//       ) : (
//         <p className="text-gray-600">Bidding closed</p>
//       )}

//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       {winner && (
//         <div className="mt-4 bg-green-100 p-3 rounded">
//           🎉 You won! <button className="bg-green-500 text-white ml-4 px-4 py-2 rounded">Checkout</button>
//         </div>
//       )}
//     </div>
//   );
// }
