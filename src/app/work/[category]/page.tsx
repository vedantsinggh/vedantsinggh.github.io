import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCategoryById, getAllCategoryIds } from "@/data/workCategories";
import WorkCategoryView from "@/components/work/WorkCategoryView";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategoryIds().map((id) => ({
    category: id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryById(category);

  if (!cat) {
    return {
      title: "Discipline Not Found — Vedant Singh",
    };
  }

  return {
    title: `${cat.title} — Projects & Achievements | Vedant Singh`,
    description: `${cat.headline}. Explore engineering projects, technical architectures, and milestones in ${cat.title} by Vedant Singh.`,
    openGraph: {
      title: `${cat.title} — Vedant Singh`,
      description: cat.headline,
      url: `https://vedantsinggh.github.io/work/${cat.id}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const catData = getCategoryById(category);

  if (!catData) {
    notFound();
  }

  return <WorkCategoryView category={catData} />;
}
