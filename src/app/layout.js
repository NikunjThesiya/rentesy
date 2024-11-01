import AppLayout from "@/components/templates/layouts/AppLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Rentesy",
	description: "Rentesy",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<AppLayout>{children}</AppLayout>
			</body>
		</html>
	);
}
