import { useEffect, useRef } from "react"
import { useRafState } from "react-use"

interface MouseState {
	docX: number
	docY: number
	posX: number
	posY: number
	elX: number
	elY: number
	elH: number
	elW: number
	scrollX: number
	scrollY: number
}

const useMouseAndScroll = (ref: React.RefObject<Element>) => {
	const [state, setState] = useRafState<MouseState>({
		docX: 0,
		docY: 0,
		posX: 0,
		posY: 0,
		elX: 0,
		elY: 0,
		elH: 0,
		elW: 0,
		scrollX: 0,
		scrollY: 0,
	})

	const lastMouseEvent = useRef<MouseEvent | null>(null)
	const _prevScrollX = useRef<number>(0)
	const _prevScrollY = useRef<number>(0)
	const _prevElX = useRef<number>(0)
	const _prevElY = useRef<number>(0)

	const updateMousePosition = (event: MouseEvent) => {
		if (ref.current && typeof window !== "undefined") {
			const { left, top, width: elW, height: elH } = ref.current.getBoundingClientRect()
			const posX = left + window.scrollX
			const posY = top + window.scrollY
			const elX = event.pageX - posX
			const elY = event.pageY - posY

			setState({
				docX: event.pageX,
				docY: event.pageY,
				posX,
				posY,
				elX,
				elY,
				elH,
				elW,
				scrollX: window.scrollX,
				scrollY: window.scrollY,
			})

			lastMouseEvent.current = event
			_prevScrollX.current = window.scrollX
			_prevScrollY.current = window.scrollY
			_prevElX.current = elX
			_prevElY.current = elY
		}
	}

	const handleScroll = () => {
		if (typeof window !== "undefined") {
			setState(prevState => ({
				...prevState,
				elX: _prevElX.current + window.scrollX - _prevScrollX.current,
				elY: _prevElY.current + window.scrollY - _prevScrollY.current,
			}))
		}
	}

	useEffect(() => {
		if (typeof window !== "undefined") {
			document.addEventListener("mousemove", updateMousePosition)
			window.addEventListener("scroll", handleScroll)

			return () => {
				document.removeEventListener("mousemove", updateMousePosition)
				window.removeEventListener("scroll", handleScroll)
			}
		}
	}, [ref])

	return state
}

export default useMouseAndScroll
