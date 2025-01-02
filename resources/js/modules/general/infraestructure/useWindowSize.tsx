import { useEffect, useState } from "react"

interface WindowSize {

	width?: number,
	height?: number

}

export const useWindowSize = () => {

	const [size, setSize] = useState<WindowSize>({ width: undefined, height: undefined })

	useEffect(() => {

		function handleResize() {

			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			})

		}

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)

	}, [])

	return size
}