import { useState, useRef } from 'react';

export default function Arena1() {
    const [reviews, setReviews] = useState([]);
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("5");

    const nextId = useRef(1);

    const averageRating =
    reviews.length === 0
        ? 0
        : (
            reviews.reduce((sum, r) => sum + r.rating, 0) /
            reviews.length
        ).toFixed(1);

    if (!title) return;
    {/* Add item function */}
    function addItem() {
        const newReviews = {
            id: nextId.current,
            title: title,
            rating: Number(rating)
        };

        nextId.current += 1;

        setReviews(oldReviews => [...oldReviews, newReviews]);

        setTitle("");
        setRating("5");
    }

    {/* Delete item function */}
    function deleteItem(idToDelete) {
        const updatedList = reviews.filter(review => review.id !== idToDelete);
        setReviews(updatedList);
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

            {/* Reviews List and Delete Button*/}
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <strong>{review.title}</strong> - {review.rating} Stars

                        <button onClick={() => deleteItem(review.id)} style={{backgroundColor: 'red'}}>
                            X
                        </button>
                    </li>
                ))}
            </ul>

            {/* Average Rating */}
            <h4>Average Rating: {averageRating}</h4>

            {/* Submit Button */}
            <button onClick={() => addItem()}>
                Submit
            </button>

        </div>
    );
}
   