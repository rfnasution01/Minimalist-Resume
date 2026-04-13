// ================= PROJECTS =================
import ImgProduct1 from "@/assets/img/produk-1.jpg";
import ImgProduct2 from "@/assets/img/produk-2.jpg";
import ImgProduct3 from "@/assets/img/produk-3.jpg";
import ImgProduct4 from "@/assets/img/produk-4.jpg";

export const projectsData = {
	title: "Featured Projects",
	subtitle:
		"A curated selection of projects focused on performance, design, and usability.",
	projects: [
		{
			title: "SaaS Landing Page",
			category: "Web Development",
			image: ImgProduct1,
			size: "large",
		},
		{
			title: "E-Commerce UI",
			category: "UI/UX Design",
			image: ImgProduct2,
			size: "small",
		},
		{
			title: "Portfolio Website",
			category: "Personal Branding",
			image: ImgProduct3,
			size: "small",
		},
		{
			title: "Startup Dashboard",
			category: "Web App",
			image: ImgProduct4,
			size: "medium",
		},
	],
};
