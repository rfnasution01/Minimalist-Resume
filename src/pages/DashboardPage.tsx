import {
	AboutSection,
	ContactSection,
	HeroSection,
	ProjectSection,
	SkillsSection,
} from "@/components/sections";

const DashboardPage = () => {
	return (
		<main className="w-full min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
			<HeroSection />
			<AboutSection />
			<SkillsSection />
			<ProjectSection />
			<ContactSection />
		</main>
	);
};

export default DashboardPage;
