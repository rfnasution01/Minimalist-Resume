import { motion, useScroll, useTransform } from "framer-motion";
import { heroData } from "@/data/hero";
import { useRef } from "react";

export const HeroSection = () => {
	const containerRef = useRef(null);
	const {
		availability,
		firstName,
		lastName,
		specialization,
		tagline,
		stats,
		cta,
	} = heroData;

	// Parallax Effect untuk background (Fitur Premium)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				// Tambahkan 'as const' di sini
				ease: [0.19, 1, 0.22, 1] as const,
			},
		},
	};

	return (
		<section
			ref={containerRef}
			className="relative min-h-[90vh] flex items-center bg-background overflow-hidden py-24"
		>
			{/* Background Grid - Lebih subtle dan dinamis */}
			<motion.div
				style={{ y }}
				className="absolute inset-0 z-0 pointer-events-none"
			>
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
						backgroundSize: "60px 60px",
					}}
				/>
				<div className="absolute inset-0 bg-linear-to-b from-transparent via-background to-background" />
			</motion.div>

			<div className="container-clean relative z-10">
				<div className="grid lg:grid-cols-12 gap-16 items-start">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
						className="lg:col-span-8"
					>
						{/* Availability Badge - Lebih Elegant */}
						<motion.div
							variants={itemVariants}
							className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-border bg-white/50 backdrop-blur-md mb-8"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
							</span>
							<span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
								{availability}
							</span>
						</motion.div>

						{/* Typography - Main Attraction */}
						<motion.h1
							variants={itemVariants}
							className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8"
						>
							<span className="block text-foreground">{firstName}</span>
							<span className="block italic font-light text-slate-300 hover:text-primary transition-colors duration-700 cursor-default">
								{lastName}
							</span>
						</motion.h1>

						<motion.p
							variants={itemVariants}
							className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl leading-relaxed mb-10"
						>
							{specialization}.{" "}
							<span className="text-foreground/80 font-normal">{tagline}</span>
						</motion.p>

						{/* CTA Buttons - Premium Roundness */}
						<motion.div
							variants={itemVariants}
							className="flex flex-col sm:flex-row gap-5"
						>
							{/* PRIMARY → DOWNLOAD CV */}
							<a
								href="/CV.pdf"
								download
								className="btn-primary group inline-flex items-center justify-center"
							>
								{cta.primary}
								<span className="ml-2 group-hover:translate-x-1 transition-transform">
									→
								</span>
							</a>

							{/* SECONDARY → SMOOTH SCROLL */}
							<button
								onClick={() => {
									const el = document.getElementById("contact");
									el?.scrollIntoView({ behavior: "smooth" });
								}}
								className="btn-secondary"
							>
								{cta.secondary}
							</button>
						</motion.div>
					</motion.div>

					{/* Stats Section - Vertical Bento Style */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.8, duration: 1 }}
						className="lg:col-span-4 space-y-4 pt-12 lg:pt-0"
					>
						{stats.map((stat, idx) => (
							<div
								key={idx}
								className="group p-8 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all duration-500"
							>
								<div className="text-xs font-bold uppercase tracking-widest text-primary mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
									{stat.label}
								</div>
								<div className="text-4xl font-medium tracking-tight text-foreground">
									{stat.value}
								</div>
							</div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator - Small Detail that matters */}
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Infinity, duration: 2 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground orientation-vertical"
			>
				Scroll
			</motion.div>
		</section>
	);
};
