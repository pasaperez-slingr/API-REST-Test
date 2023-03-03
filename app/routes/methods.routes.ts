export function APIRest (server: { get: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; post: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; put: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; patch: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; del: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; head: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; opts: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; }) {

  server.get('/method', (_: any, res: any, next: any) => { res.send({res: 'GET'}); next(); });
  server.post('/method', (_: any, res: any, next: any) => { res.send({res: 'POST'}); next(); });
  server.put('/method', (_: any, res: any, next: any) => { res.send({res: 'PUT'}); next(); });
  server.patch('/method', (_: any, res: any, next: any) => { res.send({res: 'PATCH'}); next(); });
  server.del('/method', (_: any, res: any, next: any) => { res.send({res: 'DELETE'}); next(); });
  server.head('/method', (_: any, res: any, next: any) => { res.send({res: 'HEAD'}); next(); });
  server.opts('/method', (_: any, res: any, next: any) => { res.send({res: 'OPTIONS'}); next(); });

  return server;
}