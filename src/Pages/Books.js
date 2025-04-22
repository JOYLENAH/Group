import React, { useState } from "react";

function Books() {
  const [category, setCategory] = useState(""); // State to store the selected category

  // Books data with images for each category
  const booksData = {
    Books: [
      { title: "Data Science", image: "/science.jpg" },
      { title: "Learning MySQL", image: "/mysql.jpg" },
      { title: "Learning Python", image: "/python.jpg" },
    ],
    Favorite: [
      { title: "Harry Potter", image: "/harry.jpg" },
      { title: "Percy Jackson", image: "/percy.jpg" },
      { title: "The Hobbit", image: "/hoobit.jpg" },
    ],
    Messages: [
      { title: "Communication Skills", image: "/communication.jpg" },
      { title: "Business Writing", image: "/bussiness.png" },
      { title: "Email Etiquette", image: "/email.jpg" },
    ],
    Recycle: [
      { title: "Old Classics", image: "/oldclassics.jpg" },
      { title: "Used Textbooks", image: "/usedtextbooks.jpg" },
      { title: "Eco-friendly Guides", image: "/eco friendly.jpg" },
    ],
  };

  const handleClick = (categoryName) => {
    setCategory(categoryName); // Update the selected category
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Books Page</h2>

      {/* Icons Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        {/* Books Icon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handleClick("Books")}
        >
          <img
            src="/books-icon.jpg" // Correct path to the Books icon
            alt="Books Icon"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <p>Books</p>
        </div>

        {/* Favorite Icon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handleClick("Favorite")}
        >
          <img
            src="/favorite-icon.jpg" // Correct path to the Favorite icon
            alt="Favorite Icon"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <p>Favorite</p>
        </div>

        {/* Messages Icon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handleClick("Messages")}
        >
          <img
            src="/messages-icon.png" // Correct path to the Messages icon
            alt="Messages Icon"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <p>Messages</p>
        </div>

        {/* Recycle Icon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handleClick("Recycle")}
        >
          <img
            src="/recycle.icon.png" // Correct path to the Recycle icon
            alt="Recycle Icon"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          <p>Recycle</p>
        </div>
      </div>

      {/* Dynamic Books Section */}
      <div style={{ marginTop: "30px" }}>
        <h3>{category ? `Books for ${category}` : "Tap an icon to see books"}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {booksData[category]?.map((book, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "10px",
              }}
            >
              <img
                src={book.image} // Correct book image path
                alt={book.title}
                style={{
                  width: "100px",
                  height: "150px",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <p>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
