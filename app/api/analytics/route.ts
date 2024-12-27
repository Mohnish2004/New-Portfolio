import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://api.vercel.com/v1/analytics/views?projectId=prj_ZNofXXY9YQrgvRo8ygwW0AOnY8MU',
      {
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_ANALYTICS_TOKEN}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch analytics');
    }

    const data = await response.json();
    return NextResponse.json({ pageViews: data.total || 0 });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ pageViews: 0 });
  }
} 