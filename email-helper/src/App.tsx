import { useState } from "react";
import data from "./data.json"
import Section from "./Section";

function App() {

	const [section, setSection] = useState(0)

	return (
		<div className="App">
			<div>
				<div>
					<label htmlFor="gender_mr">Mr.</label>
					<input type="radio" name="gender" id="gender_mr" />
					<label htmlFor="gender_mrs">Mrs.</label>
					<input type="radio" name="gender" id="gender_mrs" />
					<label htmlFor="gender_ms">Ms.</label>
					<input type="radio" name="gender" id="gender_ms" />
					<input type="text" placeholder="Last name"/>
				</div>
				<div></div>
				<div>
					<label htmlFor="flight_delayed">Delay</label>
					<input type="radio" name="gender" id="flight_delayed" />
					<label htmlFor="flight_cancelled">Cancellation</label>
					<input type="radio" name="gender" id="flight_cancelled" />
					<label htmlFor="flight_denied_boarding">DB</label>
					<input type="radio" name="gender" id="flight_denied_boarding" />
					<input type="text" placeholder="Flight" />
				</div>
				<div>
					<input type="text" placeholder="From" />
					<input type="text" placeholder="To" />
					<input type="text" placeholder="Connection" />
					<input type="date" />
				</div>
				<div>
					<input type="text" placeholder="Airport code" />
					<button>Find Distance</button>				
				</div>

			</div>
			<button onClick={() => setSection(0)}>Greetings</button>
			<button onClick={() => setSection(1)}>General</button>
			<button onClick={() => setSection(2)}>Requests</button>
			<button onClick={() => setSection(3)}>Requests - After</button>
			<button onClick={() => setSection(4)}>Investigation</button>
			<button onClick={() => setSection(5)}>Pay</button>
			<button onClick={() => setSection(6)}>Deny</button>
			<button onClick={() => setSection(7)}>Goodbyes</button>
			<Section data={data[section]} />
		</div>
	)
}

export default App
