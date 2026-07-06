import { Outlet } from "react-router-dom";
import { LAYOUT } from "../../../shared/constants/layout";

export default function MainContent() {
	return (
		<main className="flex-1 overflow-y-auto bg-slate-100">
			<div
				className="mx-auto w-full p-0 md:p-0.5 lg:p-0.5"
				style={{ maxWidth: LAYOUT.CONTENT_MAX_WIDTH }}
			>
				<Outlet />
			</div>
		</main>
	);
}
