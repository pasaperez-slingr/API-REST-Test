export function APIRest (server: { get: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; post: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; put: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; patch: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; del: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; head: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; opts: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; }) {

  server.get('/get', (_: any, res: any, next: any) => { res.send('GET'); next(); });
  server.post('/post', (_: any, res: any, next: any) => { res.send('POST'); next(); });
  server.put('/put', (_: any, res: any, next: any) => { res.send('PUT'); next(); });
  server.patch('/patch', (_: any, res: any, next: any) => { res.send('PATCH'); next(); });
  server.del('/delete', (_: any, res: any, next: any) => { res.send('DELETE'); next(); });
  server.head('/head', (_: any, res: any, next: any) => { res.send('HEAD'); next(); });
  server.opts('/options', (_: any, res: any, next: any) => { res.send('OPTIONS'); next(); });

  return server;
}