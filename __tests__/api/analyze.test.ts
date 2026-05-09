import { describe, it, expect } from 'vitest';
import handler from '@/app/api/analyze/route';

// Helper to mock Request with JSON body
function mockRequest(body: any): Request {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode(JSON.stringify(body)));
      controller.close();
    },
  });
  return new Request('http://localhost/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: stream,
  });
}

describe('POST /api/analyze', () => {
  it('returns products for a valid niche', async () => {
    const req = mockRequest({ niche: 'photography' });
    // @ts-ignore – handler expects a Request object
    const res = await handler.POST(req);
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(Array.isArray(data.products)).toBe(true);
    expect(data.products.length).toBeGreaterThan(0);
  });

  it('returns 400 when niche is missing', async () => {
    const req = mockRequest({});
    const res = await handler.POST(req);
    const data = await res.json();
    expect(res.status).toBe(400);
    expect(data.error).toBe('Niche is required');
  });
});
