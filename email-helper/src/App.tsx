import { useEffect, useState, useCallback } from "react";
import Modal from "./Modal";
import Section from "./Section";
import axios from 'axios';

function App() {

	const [jsonData, setJsonData] = useState([])

	const getData = (data: string) => {
		fetch(data, {
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
				setJsonData(myJson);
			});
	}

	const [section, setSection] = useState(0)
	const [formData, setFormData] = useState({
		gender: `<span class="text-red-500">Mr.</span>`,
		lastName: `<span class="text-red-500">XXX</span>`,
		thirdParty: false,
		disruption: `<span class="text-red-500">DISRUPTION</span>`,
		disrupted: `<span class="text-red-500">DISRUPTED</span>`,
		reasons: `<span class="text-red-500">REASONS</span>`,
		delay: `<span class="text-red-500">DELAY</span>`,
		flight: `<span class="text-red-500">XX XXXX</span>`,
		flightDep: [`<span class="text-red-500">DEPARTURE</span>`,""],
		flightArr: [`<span class="text-red-500">ARRIVAL</span>`,""],
		flightCon: [`<span class="text-red-500">CONNECTION</span>`,""],
		flightDate: `<span class="text-red-500">DATE</span>`,
	})
	const [block0Data, setBlock0Data] = useState<string[]>([])
	const [block1Data, setBlock1Data] = useState<string[]>([])

	const [airportName, setAirportName] = useState<string>('');

	const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const code = event.target.value;
		const container = event.target.id;
		if (code) {
			try {
				const response = await axios.get(
					`./iata.php?q=${code.toUpperCase()}`
				);
				if (container === 'container_dep')
					setFormData({ ...formData, flightDep: [`${response.data}`, code] })
				else if (container === 'container_arr')
					setFormData({ ...formData, flightArr: [`${response.data}`, code] })
				else if (container === 'container_con')
					setFormData({ ...formData, flightCon: [`${response.data}`, code] })
			} catch (error) {
				alert('Error retrieving airport information')
			}
		}
	};

	const addToBlock = (index: number, text: string) => {
		if (index === 0) {
			if (block0Data.includes(text)) {
				setBlock0Data(data => data.filter((el) => el !== text))
			}
			else setBlock0Data([...block0Data, text])
		}
		else if (index === 1) {
			if (block1Data.includes(text)) {
				setBlock1Data(data => data.filter((el) => el !== text))
			}
			else setBlock1Data([...block1Data, text])
		}
	}

	useEffect(() => {
		if (!formData.thirdParty)
			getData('./data.json')
		else
			getData('./data-3rd.json')
	}, [formData.thirdParty])

	// const [iata, setIata] = useState([]);

	const loadCity = async (apt: string) => {

		let res = await axios.get(`https://koev.cz/bl/iata.php?q=${apt}`);
		if (res.data) {
			console.log(res.data);
			return (res.data);
		}
	}

	if (!jsonData.length) return (<div>Loading...</div>)

	return (
		<div>
			<div className="w-full fixed mt-4 px-8 mx-auto">
				<div className="flex justify-end gap-2">
					<button className="p-2 rounded-md border border-gray-600 bg-gray-800 hover:bg-gray-900 text-white text-sm" onClick={() => alert("Soon!")}>Load JSON</button>
					<button className="p-2 rounded-md border border-gray-600 bg-gray-800 hover:bg-gray-900 text-white text-sm" onClick={() => alert("Soon!")}>Export JSON</button>
				</div>
			</div>
			<div className="mt-4 px-8 mx-auto">
				<div className="mb-8 flex flex-col justify-center">
					<h1 className="p-4 text-white text-4xl text-center font-bold">CC Email Templates Generator v1.03</h1>
					<span className="text-slate-300 text-center">For the lazy ones...</span>
					<span className="text-slate-300 text-center">built with React by Hristo Koev</span>
				</div>
				<div className="grid grid-rows-2 gap-2 text-gray-300">
					<div className="flex items-end justify-between gap-2">
						<div className="w-full">
							{/* <span>Passenger</span> */}
							<div className="p-2 flex gap-2">
								<label htmlFor="gender_mr" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Mr." ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, gender: "Mr." }) }}>Mr.</label>
								<input type="radio" name="gender" id="gender_mr" className="hidden" />
								<label htmlFor="gender_mrs" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Mrs." ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, gender: "Mrs." }) }}>Mrs.</label>
								<input type="radio" name="gender" id="gender_mrs" className="hidden" />
								<label htmlFor="gender_ms" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Ms." ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, gender: "Ms." }) }}>Ms.</label>
								<input type="radio" name="gender" id="gender_ms" className="hidden" />
								<input type="text" placeholder="Last name" autoFocus className="px-4 py-2 w-5/12 bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, lastName: (e.target as HTMLInputElement).value }) }} />
								<label htmlFor="third_party" className={`block w-2/12 py-2 border border-gray-600 rounded-lg text-center cursor-pointer select-none ${formData.thirdParty ? "bg-pink-500 text-white" : "hover:bg-gray-900"}`}>3RD Party</label>
								<input type="checkbox" id="third_party" className="hidden" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, thirdParty: (e.target as HTMLInputElement).checked }) }} />
							</div>
						</div>
						<div className="w-full">
							{/* <span>Disruption</span> */}
							<div className="p-2 flex gap-2 text-gray-300">
								<label htmlFor="flight_delayed" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "delay" ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, disruption: "delay", disrupted: "delayed" }) }}>Delay</label>
								<input type="radio" name="reason" id="flight_delayed" className="hidden" />
								<label htmlFor="flight_cancelled" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "cancellation" ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, disruption: "cancellation", disrupted: "cancelled" }) }}>Cancellation</label>
								<input type="radio" name="reason" id="flight_cancelled" className="hidden" />
								<label htmlFor="flight_denied_boarding" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "denied boarding" ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, disruption: "denied boarding", disrupted: "denied boarding" }) }}>Denied boarding</label>
								<input type="radio" name="reason" id="flight_denied_boarding" className="hidden" />
								<select name="reasons" id="flight_reason" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer bg-gray-800 text-white hover:bg-gray-900`} onChange={(e) => { setFormData({ ...formData, reasons: e.currentTarget.value }) }}>
									{/* <option hidden disabled selected>Reason</option> */}
									<option value="operational reasons">Operational</option>
									<option value="technical reasons">Technical</option>
									<option value="staff strike">Strike</option>
									<option value="air traffic control reasons">ATC</option>
									<option value="bad weather">Weather</option>
								</select>
							</div>
						</div>
					</div>
					<div className="w-full">
						{/* <span>Flight</span> */}
						<div className="p-2 flex gap-2 col-span-2 text-gray-300">
							<input type="text" placeholder="Flight" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flight: (e.target as HTMLButtonElement).value }) }} />
							<input type="text" placeholder="From" id="container_dep" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={handleChange} />
							{formData.flightDep[1].length == 3 && formData.flightArr[1].length == 3 && <a href={`https://www.greatcirclemap.com/?routes=${formData.flightDep[1]}-${formData.flightArr[1]}`} target="_blank" rel="noreferrer" className="block p-2">✈️</a>}
							<input type="text" placeholder="To" id="container_arr" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={handleChange} />
							<input type="text" placeholder="Connection" id="container_con" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={handleChange} />
							<input type="text" placeholder="Date (DD MMM YYYY)" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightDate: (e.target as HTMLButtonElement).value }) }} />
						</div>
					</div>
				</div>
				<div className="pt-4 mt-4 mb-4 grid grid-cols-7 gap-2 text-gray-300">
					{jsonData.map(({ id, title, icon }, index) => (
						<button onClick={() => setSection(index)} key={id} className={`px-4 py-2 border border-gray-600 rounded-lg ${index === section ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`}>{icon} {title}</button>
					))}
				</div>
				<div className="p-4 bg-gray-900/25 border border-gray-700 rounded-md">
					<Section data={jsonData[section]} formData={formData} block0Data={block0Data} block1Data={block1Data} addToBlock={addToBlock} />
				</div>
				<div className="mt-4 flex gap-2">
					<Modal generatedText={block0Data.concat(block1Data)} />
					<button className="w-[10%] p-2 rounded-md border border-gray-600 bg-gray-800 hover:bg-gray-900 text-white" onClick={() => { setBlock0Data([]); setBlock1Data([]) }}>❌</button>
				</div>

			</div>
		</div>
	)
}

export default App
