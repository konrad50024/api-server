import type { NextPage } from "next"
import { useQuery } from "react-query"
import fetch from "../utils/fetch"

const Home: NextPage = () => {
	const { data, isFetching } = useQuery(
		"test",
		async () => {
			return await fetch.get("http://localhost:5000/ping")
		},
		{ enabled: false }
	)

	const update = () => {
		// tell the server to save something in the db
	}

	if (isFetching) return <p>Loading...</p>

	return (
		<div>
			<button onClick={update}>Make an update</button>
			<p>{JSON.stringify({ data })}</p>
		</div>
	)
}

export default Home
