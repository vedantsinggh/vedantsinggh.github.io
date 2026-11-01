import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/caseStudies";
import AvniCaseStudy from "@/components/case-studies/AvniCaseStudy";
import AgniCaseStudy from "@/components/case-studies/AgniCaseStudy";
import AstroSushilCaseStudy from "@/components/case-studies/AstroSushilCaseStudy";
import ForgeOSCaseStudy from "@/components/case-studies/ForgeOSCaseStudy";
import SevaFirstCaseStudy from "@/components/case-studies/SevaFirstCaseStudy";

interface ProjectPageProps {
  params: Promise<{ category: string; project: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs();
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { project } = await params;
  const study = getCaseStudyBySlug(project);

  if (!study) {
    return {
      title: "Case Study Not Found — Vedant Singh",
    };
  }

  return {
    title: `${study.title} — Engineering Case Study | Vedant Singh`,
    description: `${study.subtitle}. ${study.summary}`,
    openGraph: {
      title: `${study.title} — Vedant Singh`,
      description: study.subtitle,
      url: `https://vedantsinggh.github.io/work/${study.category}/${study.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project } = await params;
  const study = getCaseStudyBySlug(project);

  if (!study) {
    notFound();
  }

  switch (study.slug) {
    case "avni":
      return <AvniCaseStudy study={study} />;
    case "agni":
      return <AgniCaseStudy study={study} />;
    case "astro-sushil":
      return <AstroSushilCaseStudy study={study} />;
    case "forgeos":
      return <ForgeOSCaseStudy study={study} />;
    case "seva-first":
      return <SevaFirstCaseStudy study={study} />;
    default:
      notFound();
  }
}
