import Button from "@/components/atoms/Button";
import { ROUTES } from "@/constants/routes";

export default function Communication() {
	return (
		<div className="flex flex-col items-center gap-4 justify-center w-full h-full">
			<p>Communication Page</p>
			<Button
				as="link"
				className="hover:scale-95 transition-all"
				href={ROUTES.communication.communicationLogs}
			>
				GO TO COMMUNICATION LOGS
			</Button>
		</div>
	);
}
