import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://api.vercel.com/v1/analytics/views?projectId=your_project_id', {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_ANALYTICS_TOKEN}`,
      },
      next: { revalidate: 60 }, // Cache for 1 minute
    });

    if (!response.ok) {
      throw new Error('Failed to fetch analytics');
    }

    const data = await response.json();
    return NextResponse.json({ pageViews: data.total || 0 });
  } catch (error) {
    console.error('Analytics error:', error);
    // Fetch from localStorage as fallback
    return NextResponse.json({ pageViews: 0 });
  }
} 