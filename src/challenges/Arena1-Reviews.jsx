import { useState } from 'react';

export default function Arena1() {
    const [reviews, setReviews] = useState([
        { id: 1, title: "Great product!", rating: 5 },
        { id: 2, title: "Not bad, could be better.", rating: 3 }
    ]);
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("5");

    function addItem() {
        const newReviews = {
            title: title,
            rating: rating
        };

        setReviews(oldReviews => [...oldReviews, newReviews]);

        setTitle("");
        setRating("5");
    }

    return (
        <div>
            <h2>Arena Challenge 1: Reviews</h2>

            <label>
                Title:
                <input 
                    type="text"
                    placeholder="Enter title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <br />
            <label>
                Rating:
                <select 
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
            </label>

            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.text}</strong> - {review.rating} Stars
                    </li>
                ))}
            </ul>

            <button onClick={() => addItem()}>
                Submit
            </button>

            <button>
                X
            </button>

        </div>
    );
}
   