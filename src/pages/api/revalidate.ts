import { PRISMIC_WEBHOOK_SECRET } from '@utils/constants';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verify the request is from Prismic
    const body = await request.json();
    const secret = body.secret || request.headers.get('x-prismic-secret');

    if (secret !== PRISMIC_WEBHOOK_SECRET) {
      return new Response(
        JSON.stringify({ message: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Trigger GitHub Actions workflow using workflow_dispatch
    const response = await fetch(
      `https://api.github.com/repos/${process.env.GITHUB_REPOSITORY || 'completefarmer/cf-website-v5'}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'prismic-content-update',
          client_payload: {
            source: 'prismic-webhook',
            timestamp: new Date().toISOString()
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to trigger workflow: ${response.statusText}`);
    }
    
    return new Response(
      JSON.stringify({
        message: 'Deployment triggered successfully',
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Revalidation error:', error);
    return new Response(
      JSON.stringify({
        message: 'Revalidation failed',
        error: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 