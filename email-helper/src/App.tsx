import { useEffect, useState } from "react";
import Section from "./Section";

function App() {

	const [jsonData, setJsonData] = useState([])

	const getData = () => {
		fetch('src/data.json'
			, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setJsonData(myJson);
			});
	}

	useEffect(() => {
		getData()
	}, [])

	const [section, setSection] = useState(0)
	const [formData, setFormData] = useState({
		gender: "Mr.",
		lastName: "XXX",
		disruption: "DISRUPTION",
		disrupted: "DISRUPTED",
		reasons: "REASONS",
		delay: "DELAY",
		flight: "XX XXXX",
		flightDep: "DEPARTURE",
		flightArr: "ARRIVAL",
		flightCon: "CONNECTION",
		flightDate: "DATE",
	})
	const [block0Data, setBlock0Data] = useState("")
	const [block1Data, setBlock1Data] = useState("")

	const addToBlock = (index: number, text: string) => {
		if (index === 0) setBlock0Data((data) => data + "<p>" + text + "</p>")
		else if (index === 1) setBlock1Data((data) => data + "<p>" + text + "</p>")
	}

	if (!jsonData.length) return (
		<div>Loading...</div>
	)

	return (
		<div className="my-8 max-w-screen-2xl mx-auto">
			<div className="grid grid-rows-2 gap-4 text-gray-300">
				<div className="flex items-end justify-between gap-2">
					<div className="w-full">
						<span>Passenger</span>
						<div className="mt-2 flex gap-2">
							<label htmlFor="gender_mr" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Mr." && "bg-slate-500 text-white"}`} onClick={() => { setFormData({ ...formData, gender: "Mr." }) }}>Mr.</label>
							<input type="radio" name="gender" id="gender_mr" className="hidden" />
							<label htmlFor="gender_mrs" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Mrs." && "bg-slate-500 text-white"}`} onClick={() => { setFormData({ ...formData, gender: "Mrs." }) }}>Mrs.</label>
							<input type="radio" name="gender" id="gender_mrs" className="hidden" />
							<label htmlFor="gender_ms" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Ms." && "bg-slate-500 text-white"}`} onClick={() => { setFormData({ ...formData, gender: "Ms." }) }}>Ms.</label>
							<input type="radio" name="gender" id="gender_ms" className="hidden" />
							<input type="text" placeholder="Last name" className="px-4 py-2 w-6/12 bg-gray-800 border border-gray-600 rounded-lg outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, lastName: (e.target as HTMLButtonElement).value }) }} />
						</div>
					</div>
					<div className="w-full">
						<span>Disruption</span>
						<div className="mt-2 flex gap-2 text-gray-300">
							<label htmlFor="flight_delayed" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "delay" && "bg-slate-500 text-white"}`} onClick={() => { setFormData({ ...formData, disruption: "delay", disrupted: "delayed" }) }}>Delay</label>
							<input type="radio" name="gender" id="flight_delayed" className="hidden" />
							<label htmlFor="flight_cancelled" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "cancellation" && "bg-slate-500 text-white"}`} onClick={() => { setFormData({ ...formData, disruption: "cancellation", disrupted: "cancelled" }) }}>Cancellation</label>
							<input type="radio" name="gender" id="flight_cancelled" className="hidden" />
							<label htmlFor="flight_denied_boarding" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "denied boarding" && "bg-slate-500 text-white"}`} onClick={() => { setFormData({ ...formData, disruption: "denied boarding", disrupted: "denied boarding" }) }}>Denied boarding</label>
							<input type="radio" name="gender" id="flight_denied_boarding" className="hidden" />
						</div>
					</div>
				</div>
				<div className="">
					<span>Flight</span>
					<div className="mt-2 flex gap-2 col-span-2 text-gray-300">
						<input type="text" placeholder="Flight" className="px-4 py-2 w-full bg-gray-800 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flight: (e.target as HTMLButtonElement).value }) }} />
						<input type="text" placeholder="From" className="px-4 py-2 w-full bg-gray-800 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightDep: (e.target as HTMLButtonElement).value }) }} />
						<input type="text" placeholder="To" className="px-4 py-2 w-full bg-gray-800 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightArr: (e.target as HTMLButtonElement).value }) }} />
						<input type="text" placeholder="Connection" className="px-4 py-2 w-full bg-gray-800 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightCon: (e.target as HTMLButtonElement).value }) }} />
						<input type="date" className="px-4 py-2 w-full bg-gray-800 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightDate: (e.target as HTMLButtonElement).value }) }} />
					</div>
				</div>
			</div>
			<div className="my-4 grid grid-cols-8 gap-2 text-gray-300">
				{jsonData.map(({ id, title, icon }, index) => (
					<button onClick={() => setSection(index)} key={id} className={`px-4 py-2 border border-gray-600 rounded-lg ${index === section ? "bg-slate-500 text-white" : ""}`}>{icon}&nbsp;{title}</button>
				))}
			</div>
			<div className="flex gap-2">
				<Section data={jsonData[section]} formData={formData} addToBlock={addToBlock} />
				{/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
				<div className="flex flex-col w-[37.5%] gap-4">
					<p dangerouslySetInnerHTML={{ __html: block0Data }} contentEditable className="px-4 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-lg resize-none"></p>
					<p dangerouslySetInnerHTML={{ __html: block1Data }} contentEditable className="px-4 py-2 text-gray-300 bg-gray-800 border border-gray-600 rounded-lg resize-none"></p>
				</div>
			</div>
		</div>
	)
}

export default App
