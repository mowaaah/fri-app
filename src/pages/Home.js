import AllCards from "../components/AllCards";
function Home() {
	return (
		<div>
			<div className="container-fluid bodyColor">
				<center><h1 className="pt-4" style={{ color: "#451805", fontFamily:"cursive" }}>Home</h1></center>
				<AllCards />
			</div>
		</div>
	);
}

export default Home;
