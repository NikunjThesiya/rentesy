import PageHeader from "@/components/molecules/PageHeader";
import PersonalInformationForm from "@/components/organisms/settings/PersonalInformationForm";

export default function Settings() {
	return (
		<>
			<PageHeader
				title="Settings"
				description="All the company information for verification purposes."
			/>
			<PersonalInformationForm />
		</>
	);
}
