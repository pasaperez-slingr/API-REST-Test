export function redirectOut (server: {
    get: (arg0: string, arg1: { (req: any, res: any, next: any): void; (_: any, res: any, next: any): void; (req: any, res: any, next: any): void; (req: any, res: any, next: any): void; (req: any, res: any, next: any): void; }) => void; post: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; put: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; patch: (arg0: string, arg1: (_: any, res: any, //localhost:30000/redirectMethod', next); });
      next: any) => void) => void; del: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void; head: (arg0: string, arg1: (//localhost:30000/redirectMethod', next); });
        _: any, res: any, next: any) => void) => void; opts: (arg0: string, arg1: (_: any, res: any, next: any) => void) => void;
  }) {

  server.get('/redirectOnce', (req: any, res: any, next: any) => { 
    console.log("Redirecting");
    res.redirect('http://localhost:30000/redirectOnce', next); 
  });

  server.get('/redirectMethod', (_: any, res: any, next: any) => { res.redirect('http://localhost:30000/redirectMethod', next); });
  server.post('/redirectMethod', (_: any, res: any, next: any) => { res.redirect('http://localhost:30000/redirectMethod', next); });
  server.put('/redirectMethod', (_: any, res: any, next: any) => { res.redirect('http://localhost:30000/redirectMethod', next); });
  server.patch('/redirectMethod', (_: any, res: any, next: any) => { res.redirect('http://localhost:30000/redirectMethod', next); });
  server.del('/redirectMethod', (_: any, res: any, next: any) => { res.redirect('http://localhost:30000/redirectMethod', next); });
  server.head('/redirectMethod', (_: any, res: any, next: any) => { res.redirect('http://localhost:30000/redirectMethod', next); });
  server.opts('/redirectMethod', (_: any, res: any, next: any) => { res.redirect('http://localhost:30000/redirectMethod', next); });

  server.get('/redirect1', (req: any, res: any, next: any) => { 
    console.log("Redirecting");
    res.redirect('http://localhost:30000/redirect2', next); 
  });

  server.get('/redirect3', (req: any, res: any, next: any) => { 
    console.log(req.headers.referer);
    res.redirect('http://localhost:30000/redirectFinal', next); 
  });

  server.get('/methodFinal', (req: any, res: any, next: any) => { 
    console.log(req.headers.referer);
    res.send({res: 'GET'}); next(); 
  });

  return server;
}