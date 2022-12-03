import { useEffect, useState } from "react";
import axios from "axios";

function Books() {
	const [book, setBook] = useState();
	const [author, setAuthor] = useState();
	const [genre, setGenre] = useState();
	const [books, setBooks] = useState([]);
	useEffect(() => {
		const url = "http://localhost/sat-app/db.php";
		axios.get(url).then((response) => {
			setBooks(response.data);
			console.log(books);
		});
	}, []);

	const submitBtn = function (e) {
		e.preventDefault();
		let getData = new FormData();
		getData.append("book", book); //key-value pairs
		getData.append("author", author);
		getData.append("genre", genre);
		getData.append("function", "insert");

		setBook('');
		setAuthor('');
		setGenre('');

		axios({
			method: "POST", //get //post
			url: "http://localhost/sat-app/db.php", //db link
			data: getData, // data to be transferred
			config: 'Content-Type="multipart/form-data"',
		}).then(function (response) {
			const url = "http://localhost/sat-app/db.php";
			axios.get(url).then((response) => {
				setBooks(response.data);
				console.log(books);
			});
		});
	};

	const delBtn = function (e) {
		//alert(e.currentTarget.id);
		let getData = new FormData();
		getData.append("book_id", e.currentTarget.id);
		getData.append("function", "delete");

		axios({
			method: "POST", //get //post
			url: "http://localhost/sat-app/db.php", //db link
			data: getData, // data to be transferred
			config: 'Content-Type="multipart/form-data"',
		})
			.then(function (result) {
				const url = "http://localhost/sat-app/db.php";
				axios.get(url).then((response) => {
					setBooks(response.data);
					console.log(books);
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const upBtn = function (e) {
		// alert(e.currentTarget.title);
		let getData = new FormData();
		getData.append("book_id", e.currentTarget.title);
		getData.append(
			"book",
			document.getElementById("book" + e.currentTarget.title).value
		);
		getData.append(
			"author",
			document.getElementById("author" + e.currentTarget.title).value
		);
		getData.append(
			"genre",
			document.getElementById("genre" + e.currentTarget.title).value
		);
		getData.append("function", "update");
		axios({
			method: "POST", //get //post
			url: "http://localhost/sat-app/db.php", //db link
			data: getData, // data to be transferred
			config: 'Content-Type="multipart/form-data"',
		})
			.then(function (result) {
				// alert('Successfully updated!');
				// const url = 'http://localhost/sat-app/db.php';
				// axios.get(url).then((response) => {
				// 	setBooks(response.data);
				// 	console.log(books);
				// })
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<center>
				<h1 className="pt-4" style={{ color: "#451805", fontFamily:"cursive"  }}>
					Book's List
				</h1>
				<br />
				<form action="" style={{ display: "inline-flex" }}>
					<input
						type="text"
						name="book"
						className="form-control w-25 my-4 mx-2"
						value={book}
						onChange={(e) => setBook(e.target.value)}
					/>
					<input
						type="text"
						name="author"
						className="form-control w-25 my-4 mx-2"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
					<input
						type="text"
						name="genre"
						className="form-control w-25 my-4 mx-2"
						value={genre}
						onChange={(e) => setGenre(e.target.value)}
					/>
					<input
						type="submit"
						className="btn colorButton h-50 my-4"
						name="submit"
						onClick={submitBtn}
					/>
				</form>
				<br />
				<br />
				<table>
					<thead>
						<tr>
							<th style={{ color: "#451805" }}>Book</th>
							<th style={{ color: "#451805" }}>Author</th>
							<th style={{ color: "#451805" }}>Genre</th>
						</tr>
					</thead>
					<tbody>
						{books.map((val) => {
							return (
								<tr key={val.book_id}>
									<td>
										<input
											className="form-control"
											style={{ marginRight: "10px" }}
											defaultValue={val.book}
											id={"book" + val.book_id}
										/>
									</td>
									<td>
										<input
											className="form-control"
											style={{ marginRight: "10px" }}
											defaultValue={val.author}
											id={"author" + val.book_id}
										/>
									</td>
									<td>
										<input
											className="form-control"
											style={{ marginRight: "10px" }}
											defaultValue={val.genre}
											id={"genre" + val.book_id}
										/>
									</td>
									<td>
										<button
											className="btn colorButton"
											id={val.book_id}
											onClick={delBtn}
										>
											Delete
										</button>
									</td>
									<td>
										<button
											className="btn colorButton"
											title={val.book_id}
											onClick={upBtn}
										>
											Update
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</center>
		</div>
	);
}
export default Books;
