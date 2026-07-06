import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SearchBox() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState("");

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const isShortcut =
				(e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";

			if (isShortcut) {
				e.preventDefault();
				inputRef.current?.focus();
				inputRef.current?.select();
				return;
			}

			if (e.key === "Escape") {
				inputRef.current?.blur();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<div className="group relative flex-1">
			<Search
				size={18}
				className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600"
			/>

			<input
				ref={inputRef}
				type="search"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search medicines..."
				className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-24 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 [&::-webkit-search-cancel-button]:hidden"
			/>

			{/* RIGHT SIDE CLEAR BUTTON */}
			{value && (
				<button
					onClick={() => {
						setValue("");
						inputRef.current?.focus();
					}}
					className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 hover:cursor-pointer"
				>
					<X size={16} />
				</button>
			)}

			{/* Keyboard hint */}
			{!value && (
				<div className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-500 shadow-sm lg:flex">
					<span>Ctrl</span>
					<span>K</span>
				</div>
			)}
		</div>
	);
}
