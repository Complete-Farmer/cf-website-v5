import { PRISMIC_WEBHOOK_SECRET, GH_PAT } from '@utils/constants';
import type { APIRoute } from 'astro';

// Add a GET handler for testing
export const GET: APIRoute = async () => {
  console.log('GET request received at:', new Date().toISOString());
  
  return new Response(
    JSON.stringify({
      message: 'Webhook endpoint is working',
      timestamp: new Date().toISOString()
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

export const POST: APIRoute = async ({ request }) => {
  console.log('Prismic webhook received at:', new Date().toISOString());
  
  try {
    // Verify the request is from Prismic
    const body = await request.json();
    console.log('Webhook payload:', JSON.stringify(body));
    const secret = body.secret || request.headers.get('x-prismic-secret');
    console.log('Secret received:', secret);

    if (secret !== PRISMIC_WEBHOOK_SECRET) {
      console.log('Unauthorized: Secret mismatch', { 
        received: secret, 
        expected: PRISMIC_WEBHOOK_SECRET 
      });
      return new Response(
        JSON.stringify({ message: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Get repository from environment or use default
    const repository = import.meta.env.REPOSITORY || 'Complete-Farmer/cf-website-v5';
    console.log('Triggering GitHub workflow for repo:', repository);
    
    const response = await fetch(
      `https://api.github.com/repos/${repository}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${GH_PAT}`,
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
      console.error('GitHub API response:', await response.text());
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