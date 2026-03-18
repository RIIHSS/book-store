const books = [
  { title: "Atomic Habits", price: 500 },
  { title: "Rich Dad Poor Dad", price: 400 },
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  bookList.innerHTML += `
    <div class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5>${book.title}</h5>
          <p>₹${book.price}</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
});