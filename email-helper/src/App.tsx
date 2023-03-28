import { useEffect, useState, useCallback } from "react";
import Modal from "./Modal";
import Section from "./Section";

function App() {

	const [jsonData, setJsonData] = useState([])

	const getData = () => {
		fetch('src/data.json', {
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

	useEffect(() => {
		getData()
	}, [])

	const [section, setSection] = useState(0)
	const [formData, setFormData] = useState({
		gender: "Mr.",
		lastName: "XXX",
		disruption: "delay",
		disrupted: "DISRUPTED",
		reasons: "REASONS",
		delay: "DELAY",
		flight: "XX XXXX",
		flightDep: "DEPARTURE",
		flightArr: "ARRIVAL",
		flightCon: "CONNECTION",
		flightDate: "DATE",
	})
	const [block0Data, setBlock0Data] = useState<string[]>([])
	const [block1Data, setBlock1Data] = useState<string[]>([])

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

	const checkKeyPress = useCallback((e: { key: any; keyCode: any; }) => {
		const { key, keyCode } = e;
		if (keyCode >= 49 && keyCode <= 56) {
			setSection(keyCode - 49)
		}
	}, [section]);

	useEffect(() => {
		window.addEventListener("keydown", checkKeyPress);
		return () => {
			window.removeEventListener("keydown", checkKeyPress);
		};
	}, [checkKeyPress]);

	if (!jsonData.length) return

	return (
		<>
			<div className="mt-4 max-w-screen-2xl mx-auto">
				<div className="flex justify-end gap-2">
					<button className="p-2 rounded-md border border-gray-600 bg-gray-800 hover:bg-gray-900 text-white text-sm" onClick={() => alert("Soon!")}>Load JSON</button>
					<button className="p-2 rounded-md border border-gray-600 bg-gray-800 hover:bg-gray-900 text-white text-sm" onClick={() => alert("Soon!")}>Export JSON</button>
				</div>
			</div>
			<div className="mt-4 mb-16 max-w-screen-2xl mx-auto">
				<div className="mb-8 flex flex-col justify-center">
					<h1 className="p-4 text-white text-4xl text-center font-bold">CC Email Templates Generator v1.0</h1>
					<span className="text-slate-300 text-center">For the lazy ones...</span>
					<span className="text-slate-300 text-center">built with React by Hristo Koev</span>
				</div>
				<div className="grid grid-rows-2 gap-4 text-gray-300">
					<div className="flex items-end justify-between gap-2">
						<div className="w-full">
							<span>Passenger</span>
							<div className="mt-2 flex gap-2">
								<label htmlFor="gender_mr" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Mr." ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, gender: "Mr." }) }}>Mr.</label>
								<input type="radio" name="gender" id="gender_mr" className="hidden" />
								<label htmlFor="gender_mrs" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Mrs." ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, gender: "Mrs." }) }}>Mrs.</label>
								<input type="radio" name="gender" id="gender_mrs" className="hidden" />
								<label htmlFor="gender_ms" className={`block px-4 py-2 w-2/12 border border-gray-600 rounded-lg cursor-pointer ${formData.gender === "Ms." ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, gender: "Ms." }) }}>Ms.</label>
								<input type="radio" name="gender" id="gender_ms" className="hidden" />
								<input type="text" placeholder="Last name" autoFocus className="px-4 py-2 w-6/12 bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, lastName: (e.target as HTMLButtonElement).value }) }} />
							</div>
						</div>
						<div className="w-full">
							<span>Disruption</span>
							<div className="mt-2 flex gap-2 text-gray-300">
								<label htmlFor="flight_delayed" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "delay" ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, disruption: "delay", disrupted: "delayed" }) }}>Delay</label>
								<input type="radio" name="gender" id="flight_delayed" className="hidden" />
								<label htmlFor="flight_cancelled" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "cancellation" ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, disruption: "cancellation", disrupted: "cancelled" }) }}>Cancellation</label>
								<input type="radio" name="gender" id="flight_cancelled" className="hidden" />
								<label htmlFor="flight_denied_boarding" className={`block px-4 py-2 w-4/12 border border-gray-600 rounded-lg cursor-pointer ${formData.disruption === "denied boarding" ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`} onClick={() => { setFormData({ ...formData, disruption: "denied boarding", disrupted: "denied boarding" }) }}>Denied boarding</label>
								<input type="radio" name="gender" id="flight_denied_boarding" className="hidden" />
							</div>
						</div>
					</div>
					<div className="">
						<span>Flight</span>
						<div className="mt-2 flex gap-2 col-span-2 text-gray-300">
							<input type="text" placeholder="Flight" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flight: (e.target as HTMLButtonElement).value }) }} />
							<input type="text" placeholder="From" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightDep: (e.target as HTMLButtonElement).value }) }} />
							{formData.flightDep && formData.flightArr && <button onClick={() => alert("Soon!")}>✈</button>}
							<input type="text" placeholder="To" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightArr: (e.target as HTMLButtonElement).value }) }} />
							<input type="text" placeholder="Connection" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightCon: (e.target as HTMLButtonElement).value }) }} />
							<input type="date" className="px-4 py-2 w-full bg-gray-700 border border-gray-600 rounded-lg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightDate: (e.target as HTMLButtonElement).value }) }} />
						</div>
					</div>
				</div>
				<div className="mt-4 mb-8 grid grid-cols-8 gap-2 text-gray-300">
					{jsonData.map(({ id, title, icon }, index) => (
						<button onClick={() => setSection(index)} key={id} className={`px-4 py-2 border border-gray-600 rounded-lg ${index === section ? "bg-cyan-500 text-white" : "hover:bg-gray-900"}`}>{index + 1}. {title} {icon}</button>
					))}
				</div>
				<div className="flex flex-col gap-4">
					<Section data={jsonData[section]} formData={formData} block0Data={block0Data} block1Data={block1Data} addToBlock={addToBlock} />
					<div className="flex gap-2">
						<Modal generatedText={block0Data.concat(block1Data)} />
						<button className="w-[10%] p-2 rounded-md border border-gray-600 bg-gray-800 hover:bg-gray-900 text-white" onClick={() => { setBlock0Data([]); setBlock1Data([]) }}>❌</button>
					</div>
				</div>

			</div>
		</>
	)
}

export default App
