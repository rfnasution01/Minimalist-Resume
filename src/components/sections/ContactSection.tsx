import { motion } from "framer-motion";
import { contactData } from "@/data/contact";

export const ContactSection = () => {
	const { footerNote, email, socials, cvLink } = contactData;

	return (
		<section id="contact" className="py-24 px-6 bg-foreground text-background">
			<div className="container max-w-6xl mx-auto">
				<div className="flex flex-col items-center text-center">
					{/* Big Statement */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="mb-12"
					>
						<h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.8] mb-8">
							READY TO <br />
							<span className="text-primary italic">HIRE ME?</span>
						</h2>
						<p className="text-muted-foreground uppercase tracking-widest text-sm italic">
							{footerNote}
						</p>
					</motion.div>

					{/* Email Hook */}
					<motion.a
						href={`mailto:${email}`}
						whileHover={{ scale: 1.05 }}
						className="text-2xl md:text-4xl font-light border-b-2 border-primary pb-2 mb-20 hover:text-primary transition-colors inline-block"
					>
						{email}
					</motion.a>

					{/* Bottom Grid: Socials & CV */}
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-end border-t border-background/10 pt-12">
						{/* Social Links */}
						<div className="flex flex-wrap gap-8 justify-center md:justify-start">
							{socials.map((social, idx) => (
								<motion.a
									key={idx}
									href={social.link}
									target="_blank"
									rel="noreferrer"
									whileHover={{ y: -5, color: "var(--color-primary)" }}
									className="text-sm font-bold uppercase tracking-tighter"
								>
									[{social.name}]
								</motion.a>
							))}
						</div>

						{/* Final CTA */}
						<div className="flex justify-center md:justify-end">
							<motion.a
								href={cvLink}
								whileHover={{ x: 10 }}
								className="group flex items-center gap-4 text-xl font-bold italic"
							>
								DOWNLOAD FULL RESUME
								<span className="w-12 h-12 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
									↓
								</span>
							</motion.a>
						</div>
					</div>

					{/* Minimal Copyright */}
					<div className="mt-24 opacity-30 text-[10px] uppercase tracking-[0.5em]">
						© 2024 PORTFOLIO • BUILT FOR THE FUTURE
					</div>
				</div>
			</div>
		</section>
	);
};
