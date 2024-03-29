import { ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../../lib/types";
import mainImage from "@/public/images/clc_website/clc_website_main.jpg";
import clcWebsiteThumbnail from "@/public/images/clc_website/clc_website_thumbnail.jpg";
import homeGallery from "@/public/images/clc_website/clc_website_home_gallery.jpg";


export const title = "Car Loans Canada";
export const liveUrl = "https://web.archive.org/web/20191007192100/https://www.carloanscanada.com/";
export const description = "Find out what vehicles you're eligible for today.";
export const mainImg = mainImage;
export const thumbnailImg = clcWebsiteThumbnail;
export const publishDate = "2018-03-15";
export const type = ProjectType.Website;

export const features = [
    ProjectFeature.CMS,
    ProjectFeature.Blog,
    ProjectFeature.LeadGen,
    ProjectFeature.VideoHosting,
];

export const tech = [
    ProjectTech.Gatsby,
    ProjectTech.React,
];

export const roles = [
    ProjectRole.Fullstack,
    ProjectRole.Design,
    ProjectRole.ProjectManager,
    ProjectRole.ProductOwner,
];

export const gallery = [
    homeGallery,
];