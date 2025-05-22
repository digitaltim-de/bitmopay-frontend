import { NextResponse } from 'next/server';
import { loadSolutionsData } from '@/lib/load-solutions';

export async function GET() {
  try {
    const solutions = await loadSolutionsData();
    return NextResponse.json(solutions);
  } catch (error) {
    console.error('Error loading solutions data:', error);
    return NextResponse.json(
      { error: 'Failed to load solutions data' },
      { status: 500 }
    );
  }
}