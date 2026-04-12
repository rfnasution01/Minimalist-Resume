import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

export const AboutSection = () => {
	const { title, description, philosophy, experiences } = aboutData;

	return (
		<section className="py-24 px-6 bg-secondary/30">
			<div className="container max-w-6xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Kiri: Narasi */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<h2 className="h2 mb-8 text-primary uppercase tracking-tighter italic">
							/ {title}
						</h2>
						<p className="text-3xl font-light leading-snug mb-8">
							{description}
						</p>
						<div className="p-6 border-l-4 border-primary bg-background shadow-sm italic text-muted-foreground">
							"{philosophy}"
						</div>
					</motion.div>

					{/* Kanan: Timeline */}
					<div className="space-y-12">
						<h3 className="h6 uppercase tracking-widest text-muted-foreground mb-10">
							Experience
						</h3>
						{experiences.map((exp, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.2 }}
								className="group relative pl-8 border-l border-border hover:border-primary transition-colors"
							>
								{/* Dot Decorator */}
								<div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />

								<span className="text-xs font-mono text-primary mb-2 block">
									{exp.period}
								</span>
								<h4 className="text-xl font-bold">{exp.company}</h4>
								<p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-tight">
									{exp.role}
								</p>
								<p className="text-muted-foreground leading-relaxed">
									{exp.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
