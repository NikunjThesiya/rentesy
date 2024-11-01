import Button from "@/components/atoms/Button";
import { ROUTES } from "@/constants/routes";

export default function Home() {
	return (
		<div className="flex flex-col gap-4 items-center justify-center w-full h-full">
			<Button
				as="link"
				className="hover:scale-95 transition-all"
				href={ROUTES.settings.personalInformation}
			>
				GO TO SETTINGS
			</Button>
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
