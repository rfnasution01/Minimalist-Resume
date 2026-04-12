import ImgProduct1 from "@/assets/img/produk-1.jpg";
import ImgProduct2 from "@/assets/img/produk-2.jpg";
import ImgProduct3 from "@/assets/img/produk-3.jpg";
import ImgProduct4 from "@/assets/img/produk-4.jpg";

export const projectsData = {
	title: "Featured Projects",
	subtitle:
		"A collection of my academic research and professional case studies.",
	projects: [
		{
			title: "Corporate Audit Framework",
			category: "Audit / Research",
			image: ImgProduct1,
			size: "large", // Untuk bento grid
		},
		{
			title: "Tax Analysis 2023",
			category: "Taxation",
			image: ImgProduct2,
			size: "small",
		},
		{
			title: "Financial Dashboard",
			category: "Data Viz",
			image: ImgProduct3,
			size: "small",
		},
		{
			title: "NGO Budgeting Plan",
			category: "Finance",
			image: ImgProduct4,
			size: "medium",
		},
	],
};
