import { Outlet } from "react-router-dom";
import { LAYOUT } from "../../../shared/constants/layout";

export default function MainContent() {
	return (
		<main className="flex-1 overflow-y-auto bg-slate-100">
			<div
				className="mx-auto w-full p-4 md:p-4 lg:p-6"
				style={{ maxWidth: LAYOUT.CONTENT_MAX_WIDTH }}
			>
				<Outlet />
			</div>
		</main>
	);
}
