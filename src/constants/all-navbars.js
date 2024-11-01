import {
	BellIcon,
	BuildingIcon,
	BullhornIcon,
	CalenderMonthIcon,
	ChartLineUpIcon,
	ChartMixedDollarIcon,
	ChartPieIcon,
	ClipboardIcon,
	CogIcon,
	FolderIcon,
	NewspaperIcon,
	PenIcon,
	QuestionMarkIcon,
	RocketIcon,
	UsersGroupIcon,
} from "@/components/atoms/theme-icons";
import { ROUTES } from "./routes";

export const SIDEBAR_NAV = [
	{
		title: "Overview",
		icon: <ChartPieIcon />,
		href: ROUTES.overview,
	},
	{
		title: "Calender",
		icon: <CalenderMonthIcon />,
		href: ROUTES.calender,
	},
	{
		title: "Rentals",
		icon: <BuildingIcon />,
		href: ROUTES.rentals,
	},
	{
		title: "Leasing",
		icon: <NewspaperIcon />,
		href: ROUTES.leasing,
	},
	{
		title: "People",
		icon: <UsersGroupIcon />,
		href: ROUTES.people,
	},
	{
		title: "Task & Maintenance",
		icon: <ClipboardIcon />,
		href: ROUTES.taskAndMaintenance,
	},
	{
		title: "Accounting",
		icon: <ChartMixedDollarIcon />,
		href: ROUTES.accounting,
	},
	{
		title: "Communication",
		icon: <BullhornIcon />,
		href: ROUTES.communication.index,
	},
	{
		title: "Notes",
		icon: <PenIcon />,
		href: ROUTES.notes,
	},
	{
		title: "Files",
		icon: <FolderIcon />,
		href: ROUTES.files,
	},
	{
		title: "Reports",
		icon: <ChartLineUpIcon />,
		href: ROUTES.reports,
		divide: true,
	},
	{
		title: "Notifications",
		icon: <BellIcon />,
		href: ROUTES.notifications,
	},
	{
		title: "Get Started",
		icon: <RocketIcon />,
		href: ROUTES.getStarted,
	},
	{
		title: "Help",
		icon: <QuestionMarkIcon />,
		href: ROUTES.help,
	},
	{
		title: "Settings",
		icon: <CogIcon />,
		href: ROUTES.settings.personalInformation,
	},
];

export const COMNUMICATION_TABS = [
	{
		title: "Messaging",
		subTabs: [
			{
				title: "Announcements",
				href: ROUTES.communication.announcements,
			},
			{
				title: "Communication Logs",
				href: ROUTES.communication.communicationLogs,
			},
		],
	},
	{
		title: "Signatures",
		subTabs: [
			{
				title: "Signature Requests",
				href: ROUTES.communication.signatureRequests,
			},
			{
				title: "Signature Templates",
				href: ROUTES.communication.signatureTemplates,
			},
		],
	},
];
