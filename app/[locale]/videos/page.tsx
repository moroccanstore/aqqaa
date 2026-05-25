import React from "react";
import { getTranslations } from "next-intl/server";
import VideosClient from "./VideosClient";
import { strapiData } from "@/lib/strapi";
import { videoProjects } from "@/lib/data/videos";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Videos.meta' });
  return {
    title: `${t('title')} | Said Aqqa Photography`,
    description: t('description'),
  };
}

export default async function VideosPage({ params: { locale } }: { params: { locale: string } }) {
  const strapiVideosRes = await strapiData.getVideos().catch(() => ({ data: [] }));
  const cmsVideos = strapiVideosRes?.data?.length > 0 ? strapiVideosRes.data : videoProjects;

  return <VideosClient videos={cmsVideos} />;
}
