import PageHeader from "@/components/molecules/PageHeader";
import CommunicationLogTable from "@/components/organisms/CommunicationLogTable";

export default function CommunicationLogs() {
	return (
		<>
			<PageHeader
				title="Communications Log"
				description="Keep track of every message sent through your portal"
			/>
			<CommunicationLogTable />
		</>
	);
}
