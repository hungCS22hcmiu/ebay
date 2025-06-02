// const auctions = {}; // In production, use DB lookups

// io.on("connection", (socket) => {
//   socket.on("bid", async ({ productId, amount, userId }) => {
//     const auction = auctions[productId];

//     if (!auction || !auction.isActive || new Date() > new Date(auction.endTime)) {
//       socket.emit("bid-rejected", { reason: "Bidding is closed." });
//       return;
//     }

//     if (amount <= auction.highestBid) {
//       socket.emit("bid-rejected", { reason: "Bid must be higher." });
//       return;
//     }

//     auction.highestBid = amount;
//     auction.highestUserId = userId;

//     io.emit("new-bid", { productId, amount, userId });
//   });

//   socket.on("admin-stop", ({ productId }) => {
//     if (auctions[productId]) {
//       auctions[productId].isActive = false;

//       io.emit("bidding-stopped", {
//         productId,
//         winner: auctions[productId].highestUserId,
//         amount: auctions[productId].highestBid,
//       });
//     }
//   });
// });
