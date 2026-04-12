import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";

export const SkillsSection = () => {
	const { title, marqueeSkills, tools } = skillsData;

	return (
		<section className="py-24 bg-background overflow-hidden">
			<div className="container max-w-6xl mx-auto px-6 mb-16">
				<h2 className="h2 text-center mb-4 italic">/ {title}</h2>
				<p className="text-center text-muted-foreground uppercase tracking-[0.3em] text-xs">
					Technical Stack & Proficiency
				</p>
			</div>

			{/* Infinite Marquee */}
			<div className="flex overflow-hidden border-y border-border bg-card py-10 rotate-[-1deg] scale-[1.02]">
				<motion.div
					animate={{ x: [0, -1000] }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
					className="flex whitespace-nowrap gap-12 items-center"
				>
					{[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
						<span
							key={idx}
							className="text-5xl md:text-7xl font-bold uppercase tracking-tighter opacity-20 hover:opacity-100 hover:text-primary transition-all cursor-default"
						>
							{skill} •
						</span>
					))}
				</motion.div>
			</div>

			{/* Tools Grid */}
			<div className="container max-w-6xl mx-auto px-6 mt-24">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{tools.map((tool, idx) => (
						<motion.div
							key={idx}
							whileHover={{ y: -10 }}
							className="p-8 border border-border bg-card hover:border-primary transition-all group"
						>
							<span className="text-4xl mb-6 block group-hover:scale-125 transition-transform duration-500">
								{tool.icon}
							</span>
							<h4 className="text-xl font-bold mb-2">{tool.name}</h4>
							<p className="text-xs uppercase tracking-widest text-primary font-bold">
								{tool.level}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
