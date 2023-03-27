import { useState } from "react";
import data from "./data.json"
import Section from "./Section";

function App() {

	const [section, setSection] = useState(0)
	const [formData, setFormData] = useState({
		gender: "",
		lastName: "",
		disruption: "",
		disrupted: "",
		flight: "",
		flightDep: "",
		flightArr: "",
		flightCon: "",
		flightDate: "",
	})

	return (
		<div className="my-8 max-w-screen-2xl mx-auto">
			<div className="grid grid-rows-2 grid-cols-2 gap-2">
				<div className="flex gap-2">
					<label htmlFor="gender_mr" className="block px-4 py-2 w-full border-2 cursor-pointer" onClick={() => { setFormData({ ...formData, gender: "Mr." }) }}>Mr.</label>
					<input type="radio" name="gender" id="gender_mr" className="hidden" />
					<label htmlFor="gender_mrs" className="px-4 py-2 w-full border-2 cursor-pointer" onClick={() => { setFormData({ ...formData, gender: "Mrs." }) }}>Mrs.</label>
					<input type="radio" name="gender" id="block gender_mrs" className="hidden" />
					<label htmlFor="gender_ms" className="px-4 py-2 w-full border-2 cursor-pointer" onClick={() => { setFormData({ ...formData, gender: "Ms." }) }}>Ms.</label>
					<input type="radio" name="gender" id="block gender_ms" className="hidden" />
					<input type="text" placeholder="Last name" className="px-4 py-2 border-2 outline-none" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, lastName: (e.target as HTMLButtonElement).value }) }} />
				</div>
				<div className="flex gap-2">
					<label htmlFor="flight_delayed" className="block px-4 py-2 w-full border-2 cursor-pointer" onClick={() => { setFormData({ ...formData, disruption: "delay", disrupted: "delayed" }) }}>Delay</label>
					<input type="radio" name="gender" id="flight_delayed" className="hidden" />
					<label htmlFor="flight_cancelled" className="block px-4 py-2 w-full border-2 cursor-pointer" onClick={() => { setFormData({ ...formData, disruption: "cancellation", disrupted: "cancelled" }) }}>Cancellation</label>
					<input type="radio" name="gender" id="flight_cancelled" className="hidden" />
					<label htmlFor="flight_denied_boarding" className="block px-4 py-2 w-full border-2 cursor-pointer" onClick={() => { setFormData({ ...formData, disruption: "DB", disrupted: "denied boarding" }) }}>DB</label>
					<input type="radio" name="gender" id="flight_denied_boarding" className="hidden" />
					<input type="text" placeholder="Flight" className="px-4 py-2 w-full border-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flight: (e.target as HTMLButtonElement).value }) }} />
				</div>
				<div className="flex gap-2 col-span-2">
					<input type="text" placeholder="From" className="px-4 py-2 w-full border-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightDep: (e.target as HTMLButtonElement).value }) }} />
					<input type="text" placeholder="To" className="px-4 py-2 w-full border-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightArr: (e.target as HTMLButtonElement).value }) }} />
					<input type="text" placeholder="Connection" className="px-4 py-2 w-full border-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightCon: (e.target as HTMLButtonElement).value }) }} />
					<input type="date" className="px-4 py-2 w-full border-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setFormData({ ...formData, flightDate: (e.target as HTMLButtonElement).value }) }} />
				</div>
			</div>
			<div className="my-4 grid grid-cols-8 gap-2">
				{data.map(({ id, title, icon }, index) => (
					<button onClick={() => setSection(index)} key={id} className="px-4 py-2 border-2">{icon}&nbsp;{title}</button>
				))}
			</div>
			<div className="grid grid-cols-2">
				<Section data={data[section]} formData={formData} />
				<pre>{JSON.stringify(formData, null, 2)}</pre>
				{/* <textarea rows={30} className="px-4 py-2 border-2 resize-none"></textarea> */}
			</div>
		</div>
	)
}

export default App
