import { NextResponse } from "next/server";

import { getContentfulData } from "../../../contentful/contentful-client";
import { IPortfolio } from "../../../interfaces/portfolio.interface";

export async function GET() {
  try {
    const contentfulData: IPortfolio = await getContentfulData();

    return NextResponse.json(contentfulData);
  } catch (error) {
    console.error("Error fetching Contentful data:", error);

    return NextResponse.json(
      { error: "Failed to fetch contentful data" },
      { status: 500 },
    );
  }
}
