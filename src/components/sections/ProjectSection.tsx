import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";

export const ProjectSection = () => {
	const { title, subtitle, projects } = projectsData;

	return (
		<section id="projects" className="py-24 px-6 bg-background">
			<div className="container max-w-6xl mx-auto">
				{/* Header */}
				<div className="mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="h2 mb-4 italic"
					>
						/ {title}
					</motion.h2>
					<p className="lead max-w-xl">{subtitle}</p>
				</div>

				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
					{projects.map((project, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.1 }}
							whileHover={{ y: -5 }}
							className={`group relative overflow-hidden bg-secondary border border-border rounded-none cursor-pointer 
                ${
									project.size === "large"
										? "md:col-span-8 md:row-span-2"
										: project.size === "medium"
											? "md:col-span-7"
											: "md:col-span-4"
								}`}
						>
							{/* Background Image */}
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
							/>

							{/* Overlay Content */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
									{project.category}
								</span>
								<h3 className="text-white text-2xl font-bold italic">
									{project.title}
								</h3>
							</div>

							{/* Minimalist Label (Always Visible) */}
							<div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 border border-border group-hover:opacity-0 transition-opacity">
								<span className="text-[10px] font-bold uppercase">
									{project.category}
								</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};
